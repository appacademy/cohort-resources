class UsersController < ApplicationController
    def index
        users = User.all
        render json: users
        #json => JavaScript Object Notation
    end

    def show
        user = User.find(params[:id])
        render json: user
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
            render json: user #updated user
        else
            render json: user.errors.full_messages, status: 422
        end 
    end

    def destroy
        user = User.find(params[:id])
        user.destroy
        render json: user
    end

    def user_params
        params.require(:user).permit(:username, :email, :age)
    end

end