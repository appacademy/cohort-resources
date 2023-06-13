class ApplicationController < ActionController::API
  include ActionController::RequestForgeryProtection

  protect_from_forgery with: :exception # csrf
  before_action :snake_case_params, :attach_authenticity_token

  def current_user
    @current_user || User.find_by(session_token: session[:session_token])
  end

  def login!(user)
    session[:session_token] = user.reset_session_token!
    @current_user = user
  end

  def logout!
    current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end

  def logged_in?
    !!current_user
  end

  def require_logged_in
    # not going to redirect, just send a json error message
    if !logged_in?
      render json: {errors: ['Must be logged in to do that']}, status: unauthorized
    end
  end

  def require_logged_out
    if logged_in?
      render json: {errors: ['Must be logged out']}, status: 403
    end
  end

  private
  def snake_case_params
    params.deep_transform_keys!(&:underscore) # snake case any camel case params from our frontend
  end

  def attach_authenticity_token
    headers['X-CSRF-Token'] = masked_authenticity_token(session)
  end
  
end
