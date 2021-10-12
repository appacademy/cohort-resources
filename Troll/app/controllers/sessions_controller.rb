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
            # render json: ["Invalid Username or Password"]
            flash.now[:errors] = ["Invalid Username or Password"]
            render :new
        end

        #set the session token in the browser cookies
        #redirect to users index
    end

    def destroy
        logout
        flash[:messages] = ["Successfully logged out!"]
        # flash.now[:messages] = ["Successfully logged out!"]
        # flash.now will NOT persist through to the next response cycle
        redirect_to new_session_url
    end


end
