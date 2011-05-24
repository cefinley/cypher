require 'capybara/envjs'

 Evergreen.configure do |config|
   config.driver = :envjs
   config.public_dir = 'public_html'
   config.template_dir = 'templates'
   config.spec_dir = 'spec'
 end