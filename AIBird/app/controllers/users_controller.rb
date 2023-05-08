class UsersController < ApplicationController
    # can only create user if logged out
    before_action :require_logged_out, only: [:new, :create]
    # can only see this pages if logged in
    before_action :require_logged_in, only: [:show, :edit, :update]
    
    def index
        # debugger
        @users = User.all
        # render json: @users
        render :index
    end

    def show
        # debugger
        @user = User.find(params[:id])
        # render json: @user
        # when rendering a template, we retain access to instance variables
        render :show
    end

    def new
        # technically don't need anything here
        # dummy placeholder
        @user = User.new
        render :new
    end

    def create
        # debugger
        @user = User.new(user_params)
        if @user.save
            # initiates a new req/res cycle - sends a get request to specified path
            login!(@user)
            redirect_to users_url
        else
            # render json: @user.errors.full_messages, status: 422
            @bananas = @user.errors.full_messages
            render :new
        end
    end

    def edit
        @user = User.find_by(id: params[:id])
        render :edit
    end

    def update
        @user = User.find(params[:id])
        if @user.update(user_params)
            redirect_to user_url(@user)
            # redirect_to "/users/#{@user.id}"
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def destroy
        @user = User.find(params[:id])
        @user.destroy
        redirect_to users_url
        # render json: @user
    end

    # def search
    # end
    private
    def user_params
        params.require(:user).permit(:username, :password, :email, :affiliation, :evil_score)
    end
end
