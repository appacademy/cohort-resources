class UsersController < ApplicationController
  before_action :require_logged_in, only: [:index, :show]
  before_action :require_logged_out, only:[:new, :create]

  def show
    @user = User.find_by(id: params[:id])
    render :show
  end

  def index
    @users = User.all
    render :index
  end

  def new
    @user = User.new
    # debugger
    render :new
  end

  def create
    # debugger
    @user = User.new(user_params)
    if @user.save # save! fails loudly => 500 level error
      login!(@user)
      redirect_to user_url(@user)
    else
      # render json: { errors: @user.errors.full_messages }, status: 422
      render :new
      # redirect_to new_user_url
    end
  end

  def edit
    @user = User.find_by(id: params[:id])
    render :edit
  end

  def update
    # debugger
    @user = User.find_by(id: params[:id]) 
    if @user.update(user_params)
      redirect_to user_url(@user)
    else
      # render json: { errors: @user ? @user.errors.full_messages : ['No such user'] }, status: 422
      render :edit
    end
  end

  def destroy
    @user = User.find_by(id: params[:id])
    if @user&.destroy # if @user && @user.destroy
      head :no_content
    else
      render json: { errors: @user.errors.full_messages }, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :email, :favorite_coin, :age, :password)
  end
end
