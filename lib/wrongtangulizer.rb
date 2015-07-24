require "wrongtangulizer/version"
require "fileutils"
require "json"

module Wrongtangulizer
  # Given an array of Package models, generates a Wrongtangular! instance to
  # judge the rendered side images for each side which contains a text asset.
  # Includes text sides for the online template only: print and crane templates
  # are expected to have identical text and formatting. Use this to QA font
  # formatting scripts.
  #
  # Options:
  #
  # :output_dir => [optional] A string pathname. Default "output".
  def self.package_text_sides(packages, options={})
    candidates = packages.each_with_index.map do |package, index|
      puts "#{index + 1} / #{packages.length}: Processing #{package.name}"
      template = package.template
      text_sides = template.card.sides.select {|s| s.assets_by_type("text").present?}

      # skip this package if it has not been completed uploaded to S3
      next unless text_sides.map(&:image).compact.all?(&:s3)

      {
        id: package.id,
        title: package.name,
        urls: text_sides.map(&:image_url)
      }
    end.compact

    self.create_instance(candidates, options[:output_dir] || "output")
  end

  # Given an array of Paperless Post model objects, generates a Wrongtangular!
  # instance to judge a single image per object.
  #
  # Options:
  #
  # :output_dir => [optional] A string pathname. Default "output".
  # :image_key => [optional] A symbol key used to find the image URL in each
  #   object. Default :image_url, which will be appropriate for most Paperless
  #   Post model objects. Only used if :image_set is not provided.
  # :title_key => [optional] A symbol key used to find the display name for each model object.
  #   By default, tests :title, then :name, then :id, using the first value
  #   which was non-nil for any object.
  def self.model_images(model_objects, options={})
    output_dir = options[:output_dir] || "output"
    image_key = options[:image_key] || :image_url
    title_key = options[:title_key]
    title_key ||= [:title, :name, :id].detect {|key| model_objects.first.send(key)}

    candidates = model_objects.map {|m| {id: m.id, url: m.send(image_key), title: m.send(title_key)}}
    create_instance(candidates, output_dir)
  end

  # Given an array of {:id, :url, :title} hashes, generates a Wrongtangular!
  # instance. When using this gem from the Rails console, it is better to use a
  # higher-level function such as Wrongtangulizer.model_images.
  def self.create_instance(candidates, output_dir="output")
    unless File.directory?(output_dir)
      if File.exists?(output_dir)
        raise "Could not produce output, because a file named #{output_dir} already exists."
      else
        FileUtils.mkdir_p(output_dir)
      end
    end

    # copy template to output dir; trailing '/.' copies contents
    template_dir = File.join(File.dirname(File.expand_path(__FILE__)), "../template/.")
    FileUtils.cp_r(template_dir, output_dir)

    # write candidates to output dir
    File.open(File.join(output_dir, "data/candidates.json"), "w") do |f|
      f.write(JSON.dump(candidates))
    end
  end
end
