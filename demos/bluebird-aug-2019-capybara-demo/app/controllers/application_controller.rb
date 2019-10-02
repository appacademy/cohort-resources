class ApplicationController < ActionController::Base
  #a lot of rails magic happens in ActionController::Base! crazy
  skip_before_action :verify_authenticity_token # dont worry about it but use it today! or else

  helper_method :current_user, :logged_in?

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token]) 
  end

  def logged_in?
    !!current_user
  end

  def login(user)
    @current_user = user
    session[:session_token] = @current_user.reset_session_token!

  end


  def require_login
    redirect_to new_session_url unless logged_in?
  end


end
