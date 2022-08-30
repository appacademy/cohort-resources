class Api::SessionsController < ApplicationController
  before_action :require_logged_in, only: [:destroy]
  def show
    @user = current_user
    if @user
      render 'api/users/show'
    else
      render json: { user: nil }
    end
  end

  def create
    # expect params to have username and password
    username = params[:username]
    password = params[:password]
    # { user: { username: '', password: '' }}
    # { username: '', password: '' }
    @user = User.find_by_credentials(username, password)
    if @user
      login!(@user)
      render 'api/users/show'
    else
      render json: { errors: ['Invalid credentials'] }, status: 422
    end
  end

  def destroy
    logout!
    render head :no_content
    # response will have no body
  end
end
