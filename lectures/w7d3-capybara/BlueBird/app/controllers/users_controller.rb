class UsersController < ApplicationController
    before_action :require_logged_out, only:[:new,:create]
    before_action :require_logged_in, only:[:index, :show ]

    def show
        @user = User.find(params[:id])
        render :show
    end

    def index
        @users = User.all
        render :index
    end

    def new
        @user = User.new
        render :new
    end

    def edit
        @user = User.find_by(id: params[:id])
        render :edit
    end

    def create
        @user = User.new(user_params)

        if @user.save
            login(@user)
            redirect_to chirps_url
        else
            # render json: @user.errors.full_messages, status: 422
            flash.now[:errors] = @user.errors.full_messages
            render :new
        end
    end

    def update
        @user = User.find_by(id: params[:id])

        if @user && @user.update(user_params)
            flash[:messages] = ['User info successfully updated']
            redirect_to user_url(@user)
        elsif @user
            @errors = @user.errors.full_messages
            render json: @user.errors.full_messages, status: 422
        else
            render json: ['User does not exist'], status: 404
        end 
    end

    def destroy
        @user = User.find_by(id: params[:id])

        if @user && @user.destroy
            render json: @user
        elsif @user
            render json: @user.errors.full_messages, status: 422
        else
            render json: ['User does not exist'], status: 404
        end
    end

    private

    def user_params
        params.require(:user).permit(:username, :email, :age, :coding_pref, :password)
    end
end
