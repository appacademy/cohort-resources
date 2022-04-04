class SessionsController < ApplicationController
    before_action :require_logged_out, only:[:new, :create]
    # we dont want users to log in again
    before_action :require_logged_in, only:[:destroy]
    # we only want logged in users to logout 
    def new
        
        # render :new
    end 

    def create
        
        @user = User.find_by_credentials(params[:user][:username],params[:user][:password])
        debugger
        if @user 
            login(@user) # we still need to define, but will make session tokens match 
            redirect_to user_url(@user)
        else 
            render :new
        end 
    end 



    def destroy
        logout!

        redirect_to new_session_url
    end 
end
