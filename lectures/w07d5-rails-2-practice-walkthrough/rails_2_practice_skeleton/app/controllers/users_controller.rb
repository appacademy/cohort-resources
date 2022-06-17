class UsersController < ApplicationController
  before_action :require_logged_in, only: [:show, :index]

  def new
    @user = User.new
    render :new
  end

  def create
    @user = User.create(user_params)

    # if you use save! it fails rspec
    if @user.save
      redirect_to users_url
      login(@user)
    else
      flash[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def index
    @users = User.all
    render :index
  end

  def show
    @user = User.find_by(id: params[:id])
    render :show
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
end
