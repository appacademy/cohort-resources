class SessionsController < ApplicationController
    def new
        @user = User.new
        render :new
    end

    def create
        @user = User.find_by_credentials(
            params[:user][:username], #argument
            params[:user][:password] #argument
        )
        
        if @user 
            login!(@user)
            redirect_to user_url(@user)
        else
            @user = User.new
            flash.now[:errors] = ["Invalid Credentials"]
            render :new
        end


    end

    def destroy 
        log_out!
        redirect_to new_session_url
    end
end
