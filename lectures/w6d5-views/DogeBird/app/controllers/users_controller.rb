class UsersController < ApplicationController

    def index
        @users = User.all
        render json: @users 

    end 

    def show 
        
        incoming_id = params[:id]
        @user = User.find_by(id: incoming_id)
        render json: @user
    end 

    def create 
        # debugger
        @user = User.new(user_params)
        if @user.save 
            render json: @user
        else
            render json: @user.errors.full_messages, status: 422
        end 

    end 


    def update 
        @user = User.find_by(id: params[:id])
        if @user.update(user_params)
            render json: @user 
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
        params.require(:user).permit(:username, :age, :email, :favorite_coin)
    end 
    
end 