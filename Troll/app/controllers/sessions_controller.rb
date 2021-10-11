class SessionsController < ApplicationController
    before_action :require_logged_in, only:[:destroy]
    before_action :require_logged_out, only:[:new, :create]

    def new
        render :new
    end

    def create
        #look up the user's account by username
        #verify that it is their password

        @user = User.find_by_credentials(params[:user][:username] , params[:user][:password])
        if @user
            login(@user)
            redirect_to users_url
        else
            render json: ["Invalid Username or Passord"]
        end

        #set the session token in the browser cookies
        #redirect to users index
    end

    def destroy
        logout
        redirect_to new_session_url
    end


end
