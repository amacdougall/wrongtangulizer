require "wrongtangulizer/version"
require "fileutils"
require "json"

module Wrongtangulizer
  # Generate a Wrongtangular instance from the supplied array of model objects.
  # The data must be an array of model objects, each containing at least an id
  # and an image URL property matching the :image_key option, or :image_url.
  #
  # Options:
  #
  # :output_dir => A string pathname. Default "output".
  # :image_key => A symbol key used to find the image URL in each object. Default
  #   :image_url, which will be appropriate for most Paperless Post model objects.
  # :title_key => A symbol key used to find the display name for each model object.
  #   By default, tests :title, then :name, then :id, using the first value
  #   which was non-nil for any object.
  def wrongtangulize(model_objects, options={})
    output_dir = options[:output_dir] || "output"
    image_key = options[:image_key] || :image_url
    title_key = options[:title_key]

    unless title_key
      [:title, :name, :id].each do |key|
        if model_objects.first.send(key)
          title_key = key
          break
        end
      end
    end

    # generate JSON data from model data
    assets = model_objects.map do |m|
      {
        "id" => m.id,
        "url" => m.send(image_key), # invoke model accessor method
        "title" => m.send(title_key)
      }
    end

    assets_json = JSON.dump(assets)

    # copy template to output dir
    template_dir = File.join(File.dirname(File.expand_path(__FILE__)), "../template")
    FileUtils.cp_r(template_dir, output_dir)

    # write assets to output dir
    File.open(File.join(output_dir, "data/assets.json"), "w") do |f|
      f.write(assets_json)
    end
  end
end
