Gem::Specification.new do |gem|
  gem.name = 'tablesort-rails'
  gem.version = '1.1.1'
  gem.licenses = ['MIT']
  gem.date = '2018-03-02'
  gem.summary = 'Javascript table sorting for rails'
  gem.description = 'A lightweight library for sorting table rows by clicking on a header column'
  gem.authors = ['Mike Hall']
  gem.email = 'mhall25@wisc.edu'
  gem.homepage = 'https://github.com/mhall25/tablesort-rails'
  gem.files = [
    'lib/tablesort.rb',
    'lib/tablesort/engine.rb',
    'app/assets/javascripts/tablesort.js',
    'app/assets/javascripts/tablesort-extra.js',
    'app/assets/stylesheets/tablesort.css'
  ]
end
