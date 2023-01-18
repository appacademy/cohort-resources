class UsersController < ApplicationController

  before_action :require_logged_out, only: [:new, :create]
  
  def new
    @user = User.new
    render :new
  end
  
  def index
    @users = User.all
    # render json: @users
    render :index
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      # redirect_to user_url(@user) # for show
      redirect_to users_url # for index
    else
      # use flash.now with render new, want to use render new so that we can prefill the form
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def show
    @user = User.find_by(id: params[:id])
    render :show
  end

  def edit
    # need to know who you are editting
    @user = User.find_by(id: params[:id])
    render :edit
  end

  def update
    @user = User.find_by(id: params[:id])
    if @user.update(user_params)
      redirect_to user_url(@user)
    else
      flash.now[:errors] = @user.errors.full_messages
      render :edit
    end
  end

  def destroy
    @user = User.find_by(id: params[:id])
    @user.destroy
    redirect_to users_url
  end

  private
  def user_params
    params.require(:user).permit(:username, :email, :age, :password)
  end
  
end
