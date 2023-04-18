class Api::UsersController < ApplicationController


    # ******** this is different ***********
    wrap_parameters include: User.attribute_names + ["password"]
    # **************************************

    before_action :require_logged_out, only: [:create]


    def create 
        @user = User.new(user_params)
        if @user.save 
            login(@user)
            render :show 
        else 
            render json: {errors: @user.errors.full_messages}, status: 422
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
