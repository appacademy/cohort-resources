class SessionsController < ApplicationController

    def new
        render :new
    end

    def create
        username = params[:user][:username]
        password = params[:user][:password]

        user = User.find_by_credentials(
            username,
            password
        )

        if user
            login(user)
            redirect_to users_url
        else
            render json: ['No bueno on username and/or password'], status: 401
            user.errors.full_messages
        end

    end

    def destroy
        current_user.reset_session_token!
        session[:session_token] = nil
        
        redirect_to new_session_url

    end

end
