class UsersController < ApplicationController

  def index
    users = User.all

    render json: users 
  end

  def show
    user = User.find(params[:id])

    render json: user
  end

  def create
    debugger
    user = User.new(user_params)
    
    if user.save
      render json: user 
    else
      render json: user.errors.full_messages, status: 422
    end
  end

  def update
    user = User.find(params[:id])

    if user.update(user_params)
      render json: user 
    else
      render json: user.errors.full_messages, status: 422
    end
  end

  def destroy
    user = User.find(params[:id])
    user.destroy
    render json: user
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :age, :political_affiliation)
  end

  
end
