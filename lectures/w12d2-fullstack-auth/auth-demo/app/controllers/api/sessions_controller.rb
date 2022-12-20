class Api::SessionsController < ApplicationController
  before_action :require_logged_out, only: [:create]
  before_action :require_logged_in, only: [:destroy]

  def show
    # returns info about current user
    @user = current_user
    if @user
      render 'api/users/show'
    else
      render json: { user: nil }
    end
  end

  def create
    # login
    username = params[:username]
    password = params[:password]
    @user = User.find_by_credentials(username, password)
    if @user
      login(@user)
      render 'api/users/show'
    else
      render json: { errors: ['Invalid credentials'] }, status: 422
    end
  end

  def destroy
    # logout
    logout
    head :no_content
  end
end
