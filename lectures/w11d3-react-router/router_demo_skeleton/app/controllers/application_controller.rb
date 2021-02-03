class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :current_user, :logged_in?

  private
  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def login!(user)
    session[:session_token] = user.reset_session_token!
    @current_user = user
  end

  def logout!
    current_user.try(:reset_session_token!)
    session[:session_token] = nil
  end

  def redirect_if_logged_in
    redirect_to root_url if logged_in?
  end

  def redirect_if_not_logged_in
    redirect_to new_session_url unless logged_in?
  end

  def deny_access_if_not_logged_in
    unless logged_in?
      render json: ['You must be logged in to do that'], status: :unauthorized
    end
  end

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
