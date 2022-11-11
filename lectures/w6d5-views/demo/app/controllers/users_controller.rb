class UsersController < ApplicationController
  def show
    user = User.find_by(id: params[:id])
    render json: user
  end

  def index
    users = User.all
    render json: users
  end

  def new

  end

  def edit

  end

  def create
    user = User.new(user_params)
    if user.save
      render json: user
    else
      render json: user.errors.full_messages, status: 422
    end
  end

  def update
    user = User.find_by(id: params[:id])
    if user.update(user_params)
      render json: user
    else
      render json: user.errors.full_messages, status: 422
    end
  end

  def destroy
    User.destroy(params[:id])

  end

  private
  def user_params
    params.require(:user).permit(:username, :email, :age, :coding_pref)
  end
end
