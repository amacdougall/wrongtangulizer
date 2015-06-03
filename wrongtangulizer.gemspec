# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'wrongtangulizer/version'

Gem::Specification.new do |spec|
  spec.name          = "wrongtangulizer"
  spec.version       = Wrongtangulizer::VERSION
  spec.authors       = ["Alan MacDougall"]
  spec.email         = ["alan@paperlesspost.com"]
  spec.summary       = %q{Generates Wrongtangular! instances from model object lists.}
  spec.homepage      = ""
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0")
  spec.executables   = spec.files.grep(%r{^bin/}) { |f| File.basename(f) }
  spec.test_files    = spec.files.grep(%r{^(test|spec|features)/})
  spec.require_paths = ["lib"]

  spec.add_development_dependency "bundler", "~> 1.6"
  spec.add_development_dependency "rake"

  spec.add_runtime_dependency "multi_json"
end
