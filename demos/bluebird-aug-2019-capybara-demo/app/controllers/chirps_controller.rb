class ChirpsController < ApplicationController

  before_action :require_login

  def index
    @chirps = Chirp.all
  end

  def create
    @chirp = Chirp.new(chirp_params)

    if @chirp.save
      redirect_to chirps_url
    else
      render json: @chirp.errors.full_messages, status: 422
    end
  end 

  def destroy
    chirp = current_user.chirps.find_by(id: params[:id])
    if chirp
      # chirp = current_user.chirps.find_by(author_id: params[:id])
      chirp.destroy
      redirect_to chirps_url
    else
      render json: ["you can't delete chirps that aren't yours"], status: 401
    end

  end

  private

  def chirp_params
    params.require(:chirp).permit(:body)
  end
  
end
