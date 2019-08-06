class SessionsController < ApplicationController
  before_action :require_no_user!, only: %i(create new)

  def create
    debugger
    user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if user.nil?
      flash.now[:errors] = ["Incorrect username and/or password"]
      render :new
    else
      login_user!(user)
      redirect_to cats_url
    end
  end

  def destroy
    debugger
    logout_user!
    redirect_to new_session_url
  end

  def new
    debugger
    render :new
  end
end
