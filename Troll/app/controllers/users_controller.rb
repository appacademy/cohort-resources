class UsersController < ApplicationController
    def new
        @user = User.new
        render :new
    end
    
    def index
        # users = User.all
        @users = User.all
        # render json: users
        render :index
        #json => JavaScript Object Notation
    end

    def edit 
        @user = User.find(params[:id])
        render :edit
    end
    
    def show
        # user = User.find(params[:id])
        @user = User.find(params[:id])
        # render json: user
        render :show
    end

    def create
        user = User.new(user_params)
        if user.save #runs user.save. If true, then:
            redirect_to user_url(user)
            # render json: user #render the user
        else
            render json: user.errors.full_messages, status: 422
            #422: unprocessable entity
        end
    end

    def update
        user = User.find(params[:id])

        if user.update(user_params)
            # render json: user #updated user

            # redirect_to user_url(user)
            redirect_to users_url
        else
            render json: user.errors.full_messages, status: 422
        end 
    end

    def destroy
        user = User.find(params[:id])
        user.destroy
        # render json: user
        redirect_to users_url
    end

    def user_params
        params.require(:user).permit(:username, :email, :age)
    end

end