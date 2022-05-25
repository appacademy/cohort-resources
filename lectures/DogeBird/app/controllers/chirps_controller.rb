class ChirpsController < ApplicationController

  def index 
    # debugger
    @chirps = Chirp.all 
    render json: @chirps
  end

  def show 
    # debugger
    @chirp = Chirp.find(params[:id])
    render json: @chirp
  end

  def create 
    # debugger
    @chirp = Chirp.new(chirp_params)
    @chirp.user = User.first #this would be current user, but we don't have a session yet
    if @chirp.save #
      redirect_to chirp_url(@chirp)
    else
      # debugger
      render json: @chirp.errors.full_messages, status: 422
    end
  end

  def destroy 
    @chirp = Chirp.find(params[:id])
    @chirp.destroy
    redirect_to chirps_url
  end

  def update 
    @chirp = Chirp.find(params[:id])

    if @chirp.update(chirp_params)
      redirect_to chirp_url(@chirp)
    else
      render json: @chirp.errors.full_messages, status: 422
    end
  end

  def chirp_params
    params.require(:chirp).permit(:body)
  end


end
