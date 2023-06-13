class Api::UsersController < ApplicationController

  # quality of life improvement - automatically wraps username and password in 'user' key
  # your request body can just be {username: ..., password:...}
  # be careful if columns have underscores, need to include separately ex:  + ['password', 'firstName']
  wrap_parameters include: User.attribute_names + ['password']
  
  before_action :require_logged_out

  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
  # {user: {username:..., password}}
  
end
