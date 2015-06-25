# Wrongtangulizer

Generates a _Wrongtangular!_ instance using a supplied set of model objects.

## Installation

Add this line to your application's Gemfile:

    gem 'wrongtangulizer'

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install wrongtangulizer

## Usage

[http://github.com/amacdougall/wrongtangular](_Wrongtangular!_) is a static
ClojureScript webapp which displays a list of images for quick evaluation. It
can be used to quickly QA an image set in which some images have problems, for
instance. At Paperless Post, we use it to survey the results of certain scripts
which alter design content.

To generate an instance of _Wrongtangular!_, first use the Rails console to
produce a list of Paperless Post model objects, or generate an array of hashes
in the form `{id: <int>, url: <string>, title: <string>}`, where `url` is an
image URL.

```ruby
require "wrongtangulizer"

# generate an instance based on images of sides which have text
Wrongtangulizer::package_text_sides(packages, {
  :output_dir => "wrongtangular_instance" # optional, default "output"
})

# generate an instance based on PP model objects
Wrongtangulizer::model_images({
  :image_key => :main_image_url, # optional, default :image_url
  :title_key => :nickname, # optional, default :title || :name || :id
  :output_dir => "wrongtangular_instance" # optional, default "output"
})

# generate an instance based on {id, url, title} hashes; as with the previous
# examples, the directory argument is optional, defaulting to "output"
Wrongtangulizer::create_instance(list, "simple_instance")
```
