class SessionsController < ApplicationController
  before_action :require_logged_out, only: [:new, :create]
  before_action :require_logged_in, only: [:destroy]

  def new
    @user = User.new
    render :new
  end

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      login!(@user)
      redirect_to user_url(@user)
    else
      # render json: ["invalid credentials"], status: 401
      flash.now[:errors] = ['Invalid Username or Password']
      render :new
    end
  end

  def destroy
    logout!
    redirect_to new_session_url
  end
end
