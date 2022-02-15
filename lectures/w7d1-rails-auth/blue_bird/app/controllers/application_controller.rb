class ApplicationController < ActionController::Base
    # skip_before_action :verify_authenticity_token # this is too avoid csrf verification - will cover tomorrow

    helper_method :current_user, :logged_in? # need to do this to use these methods in views!

    # CRLLL

    def current_user
        # if someone is logged in we will find them by their session token
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def require_logged_in
        redirect_to new_session_url unless current_user
    end

    def require_logged_out
        redirect_to users_url if logged_in?
    end



    def login!(user)
        # session is an object that can be accessed from browser and from rails
        session[:session_token] = user.reset_session_token!
        # session[:banana] = "banana"
    end

    def logout!
        current_user.reset_session_token!
        session[:session_token] = nil # no more token in the session object
        @current_user = nil 
    end

    def logged_in?
        !!current_user # !current_user gives us opposite boolean -> !! gives us boolean
    end
    
end
