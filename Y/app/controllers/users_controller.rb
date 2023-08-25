class UsersController < ApplicationController

  def index
    users = User.all
    render json: users
  end

  def create
    user = User.new(user_params)
    
    if user.save
      redirect_to user_url(user)
    else
      render json: user.errors.full_messages, status: 422
    end
  end

  def show
    user = User.find_by(id: params[:id])
    render json: user
  end

  def update
    user = User.find_by(id: params[:id])

    if user.update(user_params)
      redirect_to user_url(user)
    else
      render json: user.errors.full_messages, status: 422
    end
  end

  def destroy
    user = User.find_by(id: params[:id])
    user.destroy
    redirect_to users_url
  end

  private
  def user_params
    params.require(:user).permit(:username, :email, :evil_score)
  end
  
end
