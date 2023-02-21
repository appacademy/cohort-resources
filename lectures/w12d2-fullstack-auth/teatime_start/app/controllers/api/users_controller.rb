class Api::UsersController < ApplicationController

    # wraps all incoming user params in user key, so that we dont need to
    # do it on our frontend, keep in mind - have to manually include multi-word
    # attributes
    wrap_parameters include: User.attribute_names + ['password']

    before_action :require_logged_out, only: [:create]
    
    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render :show # have to create jbuilder file for this
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    private
    def user_params
        params.require(:user).permit(:username, :password)
    end
    
end
