class ApplicationController < ActionController::Base
    skip_before_action :verify_authenticity_token

    helper_method :logged_in?, :current_user # this allows me to use these methods in my EBR file (views)

    # CRRLLL

    def current_user 
        # we need to find the user who is currently logged in
        # we do this by finding who has our session_token match 
        @current_user ||= User.find_by(session_token: session[:session_token])

    end

    def require_logged_in
        # we require this person to be logged in
        # if they are not logged in, we must redirect them away from here
        redirect_to new_session_url if !logged_in? # we will write later
    end 

    def require_logged_out 
        # we want to make sure the user, is NOT logged in
        # if they are logged in, we want to redirect them away 
        #  example: you cannot see the log in page, if you are already logged in. YOu MUST be LOGGED OUT 
        redirect_to users_url if logged_in?
    end


    def login(user)
        # we force a match between the two session tokens
        session[:session_token] = user.reset_session_token # we use the R in spire found in user.rb

    end 

    def logged_in?
        # this check if there is a current user, and returns a boolean!
        !!current_user # our motivation for the double ! is to return a tru boolean (true, false)

    end 

    def log_out 
        # we must unmatch the session_tokens 
        current_user.reset_session_token # change the session_token on the user 
        session[:session_token] = nil # get rid of the old session_token, for good measure
        @current_user = nil  # clearing our current_user instance variable
    end


end
