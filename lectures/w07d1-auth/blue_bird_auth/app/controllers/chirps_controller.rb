class ChirpsController < ApplicationController

    def index 
        incoming_id = params[:user_id]
        if incoming_id
            chirps = Chirp.where(chirps: {user_id: incoming_id })
            render json: chirps
        else 
            render json: Chirp.all
        end 
    end

end
