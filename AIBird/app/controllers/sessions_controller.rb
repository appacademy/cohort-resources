class SessionsController < ApplicationController
    # can only login if we arent already logged in
    before_action :require_logged_out, only: [:new, :create]
    # can only logout if we arent already logged out
    before_action :require_logged_in, only: [:destroy]

    def new
        @user = User.new
        render :new
    end

    def create
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])

        if @user
            login!(@user)
            redirect_to users_url
        else
            render :new
        end
        
    end

    def destroy
        logout!
        redirect_to new_session_url
    end
    
end
