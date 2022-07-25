class UsersController < ApplicationController

    before_action :require_logged_out, only: [:new, :create]
    # we dont want users who are logged in to try to sign up again
    before_action :require_logged_in, only: [:index, :edit, :update, :show, :destroy]
    # we only want users who are logged in to access the main part of our app

    def index
        @users = User.all
        # render json: @users 
        render :index

    end 

    def show 
        
        incoming_id = params[:id]
        @user = User.find_by(id: incoming_id)
        # instance variables defined in the controller
        # are accessible in the corresponding view
        # render json: @user
        render :show
    end 

    def new
        @user = User.new
        render :new
    end

    def create 
        # debugger
        @user = User.new(user_params)
        if @user.save 
            # render json: @user
            # render :show
            redirect_to user_url(@user)
        else
            render json: @user.errors.full_messages, status: 422
        end 

    end 

    def edit
        @user = User.find_by(id: params[:id])
        render :edit
    end

    def update 
        @user = User.find_by(id: params[:id])
        if @user.update(user_params)
            # render json: @user 
            redirect_to user_url(@user)
        else 
            render json: @user.errors.full_messages, status: 422
        end 

    end 

    def destroy
        @user = User.find_by(id: params[:id])
        @user.destroy 
        render json: @user
    end 






    private 
    def user_params 
        params.require(:user).permit(:username, :age, :email, :favorite_coin, :password)
    end 
    
end 