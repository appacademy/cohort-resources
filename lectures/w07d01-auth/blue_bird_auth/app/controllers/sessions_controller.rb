class SessionsController < ApplicationController


    def new 
        # this, gets us the login html form
        @user = User.new
        render :new
    end 


    def create
        # this creates a session for us
        # creates a moment in time where the sessino tokens match
        # find the user by credentials provided in params, that came from the form 
        incoming_username = params[:user][:username]
        incoming_password = params[:user][:password]
        @user = User.find_by_credentials(incoming_username, incoming_password)
        if @user 
            # if we found the user, then login them in using our helper method!
            login(@user)
            redirect_to users_url
        else 
            render :new
        end


    end 


    def destroy


        # logs out the user
        # makes session_tokens unmatch!

        log_out
        redirect_to new_session_url

        # after log out, redirect them to where they can log back in 


    end 
end 