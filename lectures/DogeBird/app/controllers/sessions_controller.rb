class SessionsController < ApplicationController

  before_action :require_logged_out, only: [:new, :create]

  def new
    @user = User.new 
    render :new
  end

  def create 
    # checks username exists in database
    # then checks password is valid
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])

    if @user 
      login!(@user)
      redirect_to users_url
    else
      # will handle errors tomorrow
      render :new
    end
  end

  def destroy
    logout! 
    redirect_to new_session_url
  end

end
