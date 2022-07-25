class SessionsController < ApplicationController

    before_action :require_logged_in, only: [:destroy]
    # we dont want users who are logged in to try to login again
    before_action :require_logged_out, only: [:new, :create]
    # we only want logged in users to logout
    

    def new
        @user = User.new
        render :new
    end

    def create
        # debugger
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])

        if @user
            login(@user)
            redirect_to user_url(@user)
        else
            render :new
        end


    end

    def destroy
        logout
        redirect_to new_session_url
    end
end