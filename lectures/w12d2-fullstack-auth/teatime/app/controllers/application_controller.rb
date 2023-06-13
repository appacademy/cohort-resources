class ApplicationController < ActionController::API

  protect_from_forgery with: :exception # csrf
  before_action :snake_case_params, :attach_authenticity_token

  private
  def snake_case_params
    params.deep_transform_keys!(&:underscore) # snake case any camel case params from our frontend
  end

  def attach_authenticity_token
    headers['X-CSRF-Token'] = masked_authenticity_token(session)
  end
  
end
