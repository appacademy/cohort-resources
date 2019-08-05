class SessionsController < ApplicationController

  before_action :require_logged_out, only:[ :new, :create ]

  def new 
    @user = User.new
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:username], 
      params[:user][:password]
      )

    if @user
      login(@user)
      redirect_to user_url(@user)
    else 
      @user = User.new(username: params[:user][:username])
      flash.now[:errors] = ["Not it"]
      render :new
    end

  end

  def destroy
    logout
    redirect_to new_session_url
  end

end
