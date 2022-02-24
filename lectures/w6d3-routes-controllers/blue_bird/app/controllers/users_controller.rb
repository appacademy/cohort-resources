class UsersController < ApplicationController
    def index
        users = User.all
        render json: users
    end

    def show
        user = User.find(params[:id])
        render json: user
    end

    def create
        user = User.new(user_params)
        
        if user.save
            render json: user
        else
            render json: user.errors.full_messages, status: 422
        end
    end

    def update
        user = User.find(params[:id])
        if user.update(user_params)
            redirect_to "/users/#{user.id}"
        else
            render json: user.errors.full_messages, status: 422
        end
    end

    def destroy
        user = User.find(params[:id])
        if user.destroy
            render json: 'User was destroyed'
        else
            render json: user.errors.full_messages, status: 422
        end
    end

    private

    def user_params
        params.require(:user).permit(:username, :age, :email, :coding_affiliation)
    end
end

# rails g controller users -> creates controller & views files