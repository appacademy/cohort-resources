class ApplicationController < ActionController::Base
    skip_before_action :verify_authenticity_token
    helper_method :current_user, :logged_in?

   

    def current_user
        # find user by session token and return them
        @current_user ||= User.find_by(session_token: session[:session_token])
    end 


    def logged_in?
        # i want actual true or false, not truthy/ falsey values. 
        !!current_user
    end 

    def logout!
        # changing current users session token
        current_user.reset_session_token! if logged_in?
        # setting the sessions token to nil
        session[:session_token] = nil 
        # making current user variable nil
        @current_user = nil
    end 

    def require_logged_in
        redirect_to new_session_url unless logged_in?
        
    end 

    def require_logged_out
        redirect_to users_url if logged_in?
            
    
    end 





    def login(user)
        session[:session_token] = user.reset_session_token!  # this will return newly generated session token for user
    end

end
