class ApplicationController < ActionController::Base

  helper_method :current_user, :logged_in? #this allows us to use these methods in our views

  #methods written here can be used in all controllers

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def login!(user)
    session[:session_token] = user.reset_session_token!
    @current_user = user
  end

  def logged_in?
    !!current_user
  end

  def logout!
    current_user.reset_session_token! if logged_in?
    session[:session_token] = nil 
    @current_user = nil
  end

  def require_logged_out
    redirect_to users_url if logged_in?
  end
end
