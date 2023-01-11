class ChirpsController < ApplicationController
    def index
        @chirps = Chirp.all
        render json: @chirps
    end

    def show
        # debugger
        @chirp = Chirp.find(params[:id])
        render json: @chirp
    end

    def create
        debugger
        @chirp = Chirp.new(chirp_params)
        @chirp.author_id = params[:user_id]
        if @chirp.save
            redirect_to chirp_url(@chirp)
        else
            render json: @chirp.errors.full_messages, status: 422 #:unprocessable_entity
        end
    end

    def update
        @chirp = Chirp.find(params[:id])
        if @chirp.update(chirp_params)
            redirect_to chirp_url(@chirp)
        else
            render json: @chirp.errors.full_messages, status: :unprocessable_entity
        end
    end

    def destroy
        @chirp = Chirp.find(params[:id])
        @chirp.destroy
        # render json: @chirp
        redirect_to chirps_url
    end

    private

    def chirp_params
        params.require(:chirp).permit(:body, :author_id)
    end

end

# chirp_controller1 = ChirpsController.new # the router will make an instance of this controller 
# chirp_controller1.index # and call the method specified action according to the verb and path
