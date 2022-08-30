class Api::UsersController < ApplicationController
  wrap_parameters include: User.attribute_names + ['password']
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
    # <input name='username'
    # { user: { username: 'bob', password: 'password' }}
    # { username: 'bob', password: 'password' , user: { username: 'bob', password: 'password' }}
  end
end
