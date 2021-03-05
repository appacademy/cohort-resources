class ApplicationController < ActionController::Base


  private
  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def signed_in?
    !!current_user
  end

  def sign_in!(user)
    session[:session_token] = user.reset_session_token!
    current_user = user
  end

  def sign_out!
    @current_user.reset_session_token!
    session[:session_token] = nil
  end

  def require_signed_in!
    redirect_to new_sessions_url unless signed_in?
  end
end
