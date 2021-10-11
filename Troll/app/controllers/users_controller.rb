class UsersController < ApplicationController
  before_action :require_logged_in, except: [:new, :create]
  before_action :require_logged_out, only: [:new, :create]

  def new
    @user = User.new
    render :new
  end
  
  def index
    @users = User.all
    render :index
  end
  
  def edit 
    @user = User.find(params[:id])
    render :edit
  end
  
  def show
    @user = User.find(params[:id])
    render :show
  end
  
  def create
    user = User.new(user_params)
    if user.save #runs user.save. If true, then:
      login(user)
      redirect_to user_url(user)
    else
      render json: user.errors.full_messages, status: 422 #422: unprocessable entity
    end
  end
  
  def update
    user = User.find(params[:id])
  
    if user.update(user_params)
      redirect_to user_url(user)
    else
      render json: user.errors.full_messages, status: 422
    end 
  end
  
  def destroy
    user = User.find(params[:id])
    user.destroy
    redirect_to users_url
  end
  
  def user_params
    params.require(:user).permit(:username, :email, :age, :password)
    #password_digest and session_token are set by default in our model
  end
  
end