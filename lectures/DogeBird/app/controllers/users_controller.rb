class UsersController < ApplicationController

  before_action :require_logged_out, only: [:new, :create]

  def new
    @user = User.new
    render :new
  end

  def index
    @users = User.all
    render :index
  end

  def show
    @user = User.find_by(id: params[:id])
    render :show
  end

  def create
    # debugger
    user = User.new(user_params)

    if user.save
      login!(user)
      redirect_to user_url(user)
    else
      render :new
    end
  end

  def edit
    @user = User.find_by(id: params[:id])
    render :edit
  end

  def update
    user = User.find_by(id: params[:id])
    debugger
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
    params.require(:user).permit(:username, :password, :email, :age)
  end
  
end
