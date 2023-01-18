class SessionsController < ApplicationController

    before_action :require_logged_out, only: [:new, :create]
    before_action :require_logged_in, only: :destroy

    def new
        @user = User.new
        render :new
    end

    def create
        # does a user exist with that username?
        # if found, do the passwords match?
        # if match, we want to create a session
        # creating a session is just matching up their session token, to a token in the cookies
        user = User.find_by_credentials(params[:user][:username], params[:user][:password])

        if user
            # create s_t key in the session object, equal to users token
            login!(user)
            redirect_to users_url
        else
            # user is nil or not found
            @user = User.new(username: params[:user][:username])
            flash.now[:errors] = ["Invalid Credentials"]
            render :new
        end
    end

    def destroy
        logout!
        flash[:messages] = ["Successfully logged out!"]
        redirect_to new_session_url # might as well take them to sign in
    end
    
end
