class ChirpsController < ApplicationController

  def index
    chirps = Chirp.where(author_id: params[:user_id])

    render json: chirps 
  end

  def show
    chirp = Chirp.find(params[:id])

    render json: chirp 
  end

end
