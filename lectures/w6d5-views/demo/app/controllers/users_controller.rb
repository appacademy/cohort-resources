class UsersController < ApplicationController
  def show
    @user = User.find_by(id: params[:id])
    render :show
  end

  def index
    @users = User.all
    render :index
  end

  def new
    @user = User.new # convention
    render :new
  end

  def edit
    # ???
  end

  def create
    @user = User.new(user_params)
    if @user.save
      # render :show
      redirect_to user_url(@user)
    else
      render json: @user.errors.full_messages, status: 422
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
    # two different options for what to render
    # render json: { user_id: params[:id] }
    head :no_content # nothing in body of response
  end

  private
  def user_params
    params.require(:user).permit(:username, :email, :age, :coding_pref)
  end
end
