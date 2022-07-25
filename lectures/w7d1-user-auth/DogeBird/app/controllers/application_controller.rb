class ApplicationController < ActionController::Base
    skip_before_action :verify_authenticity_token

    helper_method :current_user, :logged_in?

    def current_user
        # We use the session[:session_token] to find our user
        # We conditionally assign the @current_user ivar to avoid 
        # querying the database more than once
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def require_logged_in
        redirect_to new_session_url unless logged_in?
        # send user to the login form if they are trying to perform 
        # an action that requires them to be logged in
    end

    def require_logged_out
        redirect_to users_url if logged_in?
        # send user to the users index (home page) if they are trying to perform
        # an action that requires them to be logged out
    end

    def logged_in?
        # Not 100% necessary, but sometimes it is nice to have true/false values rather than truthy/falsey
        # We want logged in to return true/false not nil even though nil is falsey 
        !!current_user
    end
    
    
    def login(user)
        session[:session_token] = user.reset_session_token
            # we can assign session[:session_token] to the return value of reset_session_token
            # because it returns the new session_token.
    end

    def logout

        # checking for current_user is only necessary to handle the case when logout is called while logged out – it shouldn't ever happen but we don't want to get an undefined method for nil error
        current_user.reset_session_token if logged_in?
        
        # setting the session_token to nil is *technically* all we need, but we also want to make sure to clean up our instance variables just in case
        # We'll also reset the current_user's session token to ensure that it's unique each time – this is redundant, but ensures thsat if the session_token was captured somehow it couldn't be used to 'spoof' a log in
        session[:session_token] = nil
        # We should clear this instance variable to ensure `current_user` returns nil – only really necessary if we `render` from the destroy route instead of redirecting
        @current_user = nil
    end


end
