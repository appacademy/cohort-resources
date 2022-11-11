class ApplicationController < ActionController::Base
  # for postman testing
  skip_before_action :verify_authenticity_token
  
end
