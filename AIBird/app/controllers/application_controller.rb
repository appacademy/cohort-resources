class ApplicationController < ActionController::Base
    skip_before_action :verify_authenticity_token
    # any methods in here can be used by any other controller
    helper_method :current_user, :logged_in? # what allows us to use these in our views

    def current_user
        return nil unless session[:session_token] # save us from making a query
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def require_logged_in
        # if someone is not logged in, we should redirect them to the login page
        redirect_to new_session_url unless logged_in?
    end

    def require_logged_out
        # if someone is logged in, we'll redirect them somewhere else if they shouldnt see some page
        redirect_to users_url if logged_in?
    end

    def login!(user)
        # create a key value pair in session hash
        session[:session_token] = user.reset_session_token!
        @current_user = user # save from doing extra queries
    end

    def logged_in?
        # current_user.nil? ? false : true
        !!current_user # same thing
    end

    def logout!
        # change the token in the db
        current_user.reset_session_token! if logged_in?
        # change it in the cookie to nil
        session[:session_token] = nil
        @current_user = nil
    end
end
