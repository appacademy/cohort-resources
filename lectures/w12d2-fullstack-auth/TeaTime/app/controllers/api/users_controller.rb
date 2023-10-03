class Api::UsersController < ApplicationController
  before_action :require_logged_out

  wrap_parameters include: User.attribute_names + ['password'] # nests params under user for our user_params

  def create
    @user = User.new(user_params)
    if @user.save # check validations, save to db
      login!(@user)
      render :show # send jbuilder response
    else
      render json: {errors: @user.errors.full_messages}, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
  
end
