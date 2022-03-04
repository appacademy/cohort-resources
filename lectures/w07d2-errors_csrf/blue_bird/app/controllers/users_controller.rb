class UsersController < ApplicationController
    before_action :require_logged_out, only: [:new, :create]
    before_action :require_logged_in, only: [:index, :show]

    def index
        debugger
        @users = User.all
        render :index
    end

    def show
        @user = User.find(params[:id])
        render :show
    end

    def new
        @user = User.new
        render :new
    end

    def edit
        @user = User.find(params[:id])
        render :edit
    end

    def create
        # debugger
        @user = User.new(user_params)
        
        if @user.save
            login!(@user)
            redirect_to user_url(@user)
        else
            # render json: @user.errors.full_messages, status: 422
            flash.now[:errors] = @user.errors.full_messages
            render :new
        end
    end

    def update
        @user = User.find(params[:id])
        if @user.update(user_params)
            redirect_to "/users/#{@user.id}"
        else
            render json: user.errors.full_messages, status: 422
        end
    end

    def destroy
        @user = User.find(params[:id])
        if @user.destroy
            redirect_to users_url
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    private

    def user_params
        params.require(:user).permit(:username, :age, :email, :coding_affiliation, :password)
    end
end


# rails g controller users -> creates controller & views files

# params = { user=>{ username: "user1", password:"21313" }  }