# Filters added to this controller apply to all controllers in the application.
# Likewise, all the methods added will be available for all controllers.

class ApplicationController < ActionController::Base
  helper :all # include all helpers, all the time
  protect_from_forgery # See ActionController::RequestForgeryProtection for details
  
  protected
    # Render a '404'.
    # NOTE: This explicitly returns true so you can do things like...
    #       not_found and return
    def not_found
      render :file => (Rails.root + "public/404.html").to_s
      true
    end
    
  # Scrub sensitive parameters from your log
  # filter_parameter_logging :password
end
