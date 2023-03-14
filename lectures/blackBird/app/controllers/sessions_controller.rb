class SessionsController < ApplicationController 






    def new
        @user = User.new
        render :new 
    end 


    def create 
        # debugger
        # this is loggin someone in who is already in our database 
    # incoming_username = params[:user][:username]
    # incoming_password = params[:user][:password]
        @user = User.find_by_credentials(params[:user][:username],params[:user][:password])

        if @user 
            login(@user)
            redirect_to users_url 
        else
            flash.now[:errors] = ["Invalid Credentials"]
            render :new
        end 


    end 


    def destroy 
        logout
        flash[:messages] = ["Successfully logged out"]
        redirect_to new_session_url
    end 



end 