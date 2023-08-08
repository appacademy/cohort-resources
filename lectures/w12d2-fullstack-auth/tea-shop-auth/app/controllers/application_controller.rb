class ApplicationController < ActionController::API
  # enable CSRF protection
  include ActionController::RequestForgeryProtection
  protect_from_forgery with: :exception

  before_action :snake_case_params, :attach_authenticity_token

  private
  # convert keys in params from camelCase to snake_case
  def snake_case_params
    params.deep_transform_keys!(&:underscore)
  end

  def attach_authenticity_token
    headers['X-Csrf-Token'] = form_authenticity_token
  end
end
