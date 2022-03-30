class ChirpsController < ApplicationController

    def index
        @chirps = Chirp.all 
        render json: @chirps
    end

    def show
        id = params[:id]
        @chirp = Chirp.find_by(id: id)
        if @chirp 
            render json: @chirp
        else
            render json: "Not found", status: 404
        end
    end

    def create
        @chirp = Chirp.new(chirp_params)
        @chirp.author = User.first
        if @chirp.save
            redirect_to chirp_url(@chirp.id)
        else
            render json: @chirp.errors.full_messages, status: 404
        end
    end

    def update
        @chirp = Chirp.find(params[:id])
        if @chirp.update(chirp_params)
            redirect_to chirp_url(@chirp)
        else
            render json: @chirp.errors.full_messages, status: 404
        end
    end

    def destroy
        @chirp = Chirp.find(params[:id])
        @chirp.destroy
        redirect_to chirps_url
    end

    private
    def chirp_params
        params.require(:chirp).permit(:body)
    end

end
