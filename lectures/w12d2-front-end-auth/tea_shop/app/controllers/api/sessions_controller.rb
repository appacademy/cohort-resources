class Api::SessionsController < ApplicationController

    before_action :require_logged_out, only: [:create]
    before_action :require_logged_in, only: [:destroy]

    def show 
        @user = current_user
        if @user 
            render "api/users/show"
        else 
            render json: {user: nil}
        end 
    end 


    def create 
        username = params[:username]
        password = params[:password]
        @user = User.find_by_credentials(username, password)
        debugger
        if @user 
            login(@user)
            render "api/users/show"
        else 
            render json: {errors: ["Invalid Credentials"]}, status: 422
        end 
    end 

    def destroy 
        logout
        # **** Dif ****
        head :no_content # populate the http response with no cnontent => no body
        # **********

    end 


end
