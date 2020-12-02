class UsersController < ApplicationController
  before_action :redirect_if_logged_in

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      redirect_to root_url
    else
      flash.now[:errors] = @user.errors
      render :new
    end
  end
end
