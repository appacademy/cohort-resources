class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token

  helper_method :logged_in?, :current_user
  # allows us to use these methods in views



  def current_user
    # session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token])

  end
  
  def require_logged_in
    redirect_to new_session_url unless logged_in?

  end

  def require_logged_out
    redirect_to users_url if logged_in?

  end

  def logged_in?
    !!current_user

  end
  
  
  def login(user)
    debugger
    session[:session_token] = user.reset_session_token

  end
  
  
  def logout 
    current_user.reset_session_token if logged_in?
    session[:session_token] = nil
    @current_user = nil

  end 
end
