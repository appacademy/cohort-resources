class UsersController < ApplicationController
  before_action :require_logged_in, except: [:new,:create]

  def new
    @user = User.new
    render :new # optional
  end 

  def edit
    @user = User.find(params[:id])
    render :edit
  end 

  def index
    @users = User.all
    # render json: users
    render :index
  end

  def show
    @user = User.find(params[:id])
    # render json: user
    render :show
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      redirect_to user_url(@user)
    else
      # render json: @user.errors.full_messages, status: 418
      flash.now[:errors] = @user.errors.full_messages 
      render :new 
    end
  end

  def update
    @user = User.find(params[:id])

    if @user.update_attributes(user_params)
      # render json: @user
      redirect_to user_url(@user)
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy
    # render json: @user
    redirect_to users_url #go to index
  end

  private
  def user_params
    params.require(:user).permit(:username, :email, :age, :political_affiliation, :password)
  end

  
end
