class ChirpsController < ApplicationController
    # before_action :require_logged_in

    def index
        if params[:user_id]
          @chirps = Chirp.where(author_id: params[:user_id]).includes(:author)
        else
          @chirps = Chirp.all.includes(:author)
        end
        render :index
      end

    def new
        render :new
    end

    def create
        @chirp = Chirp.new(chirp_params)
        @chirp.author = current_user
        if @chirp.save
            redirect_to user_url(@chirp.author)
        else
            render json: @chirp.errors.full_messages, status: 422
        end
    end


    def destroy
        @chirp = Chirp.find(params[:id])
        @chirp.destroy
        redirect_to user_url(@chirp.author_id)
    end

    private
    def chirp_params
        params.require(:chirp).permit(:body)
    end

end
