class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token #DON'T FORGET TO REMOVE AFTER TESTING IS DONE!
  helper_method :current_user, :logged_in?
  
  # CRLLL

  #method that if we have a current_user, it returns, otherwise it finds it by its session token
  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  #method that redirects if no user is logged_in
  def require_logged_in
    redirect_to new_session_url if !logged_in?
  end

  #bonus
  #method that redirects if no user is logged out
  def require_logged_out
    redirect_to users_url if logged_in?
  end

  #login method
  def login!(user)
    session[:session_token] = user.reset_session_token!
  end

  #check truthy value of current_user method
  def logged_in?
    !!current_user  #check truthy value => !nil => true => !true = false
                      # current_user => !current_user = false => !!current_user => true
  end

  #method to log out
  def logout!
    current_user.reset_session_token! if logged_in? #prevents undefined method error if no current_user
    session[:session_token] = nil
    @current_user = nil
  end



end
