class ApplicationController < ActionController::API
  include ActionController::RequestForgeryProtection
  
  protect_from_forgery with: :exception # csrf

  before_action :attach_authenticity_token, :snake_case_params


  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def require_logged_in
    # no redirect in SPA
    if !logged_in?
      render json: {errors: ['Must be logged in']}, status: :unauthorized
    end
  end

  def require_logged_out
    # no redirect in SPA
    if logged_in?
      render json: {errors: ['Must be logged out']}, status: :unauthorized
    end
  end

  def logged_in?
    !!current_user
  end

  def login!(user)
    session[:session_token] = user.reset_session_token! # token in db == token in browser cookie
    @current_user = user
  end

  def logout!
    current_user.reset_session_token! # remove token from db
    session[:session_token] = nil # remove token from browser cookies
    @current_user = nil # remove instance variable
  end

  private
  def attach_authenticity_token
    # grab this in restoreSession
    headers['X-CSRF-Token'] = masked_authenticity_token(session)
  end

  # transform camelcase requests to snakecase: user: {userId: 2} -> user: {user_id: 2}
  def snake_case_params
    params.deep_transform_keys!(&:underscore)
  end
end
