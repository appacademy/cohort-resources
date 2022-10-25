class Api::UsersController < ApplicationController
  # wrap_parameters :user, include: User.attribute_names + ['password']

  before_action :require_logged_out, only: [:create]

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      render @user.errors.full_messages, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
end

/n
createNewUser({username: 'bob', password: 'password'})

Rails automatically nests params that match a column
params => { username: 'bob', password: 'password', user: {username: 'bob', password: 'password'}}

n/