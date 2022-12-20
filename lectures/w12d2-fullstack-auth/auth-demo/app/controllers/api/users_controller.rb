class Api::UsersController < ApplicationController
  # wrap_parameters include: User.attribute_names
  wrap_parameters include: User.attribute_names + ['password']

  before_action :require_logged_out, only: [:create]

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: { errors: @user.errors.full_messages }, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
    # front end can send data like { user: { username: 'bob', password: 'password'} }
    # front end can also send it as { username: 'bob', password: 'password' }
  end
end
