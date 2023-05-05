class ChirpsController < ApplicationController
    def index
        # debugger
        @chirps = Chirp.where(user_id: params[:user_id])
        render json: @chirps
    end

    def create
        # debugger
        @chirp = Chirp.new(chirp_params)
        if @chirp.save
            render json: @chirp
        else
            render json: @chirp.errors.full_messages, status: 422
        end
    end

    def show
        # debugger
        @chirp = Chirp.find(params[:id])
        render json: @chirp
    end

    def update
        @chirp = Chirp.find(params[:id])
        if @chirp.update(chirp_params)
            # debugger
            redirect_to chirp_url(@chirp)            
        else
            render json: @chirp.errors.full_messages, status: 422
        end
    end

    def destroy
        @chirp = Chirp.find(params[:id])
        @chirp.destroy
        render json: @chirp
    end

    private
    def chirp_params
        params.require(:chirp).permit(:body, :user_id)
    end

end
