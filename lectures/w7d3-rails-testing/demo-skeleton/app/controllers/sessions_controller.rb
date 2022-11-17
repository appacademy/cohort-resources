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
            flash.now[:errors] = ['Invalid credentials']
            render :new
        end


    end

    def destroy
        logout
        flash[:messages] = ["Successfully logged out"]
        redirect_to new_session_url
    end
end