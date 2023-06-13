class Api::SessionsController < ApplicationController
  before_action :require_logged_in, only: [:destroy]
  before_action :require_logged_out, only: [:create]

  # get current_user if someone is logged in
  def show
    @user = current_user
    if @user
      render 'api/users/show' # need to use the path to that jbuilder file
    else
      render json: {user: nil}
    end
  end

  def create
    @user = User.find_by_credentials(params[:username], params[:password])
    if @user
      login!(@user)
      render 'api/users/show'
    else
      render json: {errors: ['Invalid Credentials']}, status: 422
    end
  end

  def destroy
    logout!
    render json: {message: ['Success']}
  end
  
end
