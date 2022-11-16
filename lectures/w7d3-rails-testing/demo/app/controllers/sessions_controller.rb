class SessionsController < ApplicationController 
    
    def new 
        @user = User.new
        render :new
    end 

    def create
    # incoming_username = 
    # incoming_pw= 
    # debugger
        @user = User.find_by_credentials(params[:user][:username],params[:user][:password])

        if @user 
            login(@user)
            redirect_to users_url
        else
            render :new
        end 
    end


    def destroy 
        # debugger
        logout
        redirect_to new_session_url
    end 


end 