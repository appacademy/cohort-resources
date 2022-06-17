class ApplicationController < ActionController::Base
  #CHRLLL

  helper_method :current_user, :logged_in?, :require_logged_in

  def current_user
    @current ||= User.find_by(session_token: session[:session_token])
  end

  def require_logged_in
    redirect_to new_session_url unless logged_in?
  end

  def login(user)
    @current_user = user
    session[:session_token] = user.reset_session_token!
  end

  def logout!
    current_user.reset_session_token!
    @current_user = nil
    session[:session_token] = nil
  end

  def logged_in?
    !!current_user
  end
end
