class Api::SessionsController < ApplicationController

    before_action :require_logged_out, only: [:create]
    before_action :require_logged_in, only: [:destroy]

    def show
        @user = current_user
        if @user
            render 'api/users/show' # use the user show jbuilder
        else
            render json: {user: nil} # no error, just no user
        end
    end

    def create
        # assuming username and password is not nested, just in params
        username = params[:username]
        password = params[:password]
        @user = User.find_by_credentials(username, password)

        if @user
            login!(@user)
            render 'api/users/show'
        else
            render json: {errors: ["Invalid credentials"]}, status: 422
        end
    end

    def destroy
        logout!
        head :no_content # populate http response with no content
    end
    
end
