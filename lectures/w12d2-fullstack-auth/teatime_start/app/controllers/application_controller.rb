class ApplicationController < ActionController::API

    include ActionController::RequestForgeryProtection

    protect_from_forgery with: :exception
    before_action :snake_case_params, :attach_authenticity_token

    private
    def snake_case_params
        params.deep_transform_keys!(&:underscore)
    end

    def attach_authenticity_token
        headers["X-CSRF-Token"] = masked_authenticity_token(session)
    end

    # try to find a user that matches their session_token to the browser cookie
    def current_user
        return nil if session[:session_token].nil?
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def logged_in?
        !!current_user
    end

    # give the user a new session token and set it equal to the browser cookie
    def login!(user)
        session[:session_token] = user.reset_session_token!
        @current_user = user
    end

    def logout!
        current_user.reset_session_token! # no longer equal to browser cookie
        # clean up tokens
        session[:session_token] = nil
        @current_user = nil
    end

    # return json error response if trying to access certain pages
    def require_logged_in
        if !logged_in?
            render json: {errors: ['Must be logged in']}, status: :unauthorized
        end
    end

    def require_logged_out
        if logged_in?
            render json: {errors: ['Must be logged out']}, status: 403
        end
    end
    
end
