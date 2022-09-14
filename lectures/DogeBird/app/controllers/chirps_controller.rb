class ChirpsController < ApplicationController

  def index
    @chirps = Chirp.all # active record relation of chirp instances
    render json: @chirps # json response - kind of like a string
  end

  def create
    # debugger

    @chirp = Chirp.new(chirp_params)

    if @chirp.save
      # if it saves (no validation error)
      redirect_to chirp_url(@chirp) # chirp_url is a built in helper method
      # redirect_to chirps_url # corresponds to index
      # render json: ["chirp created!"]
    else
      render json: @chirp.errors.full_messages, status: :unprocessable_entity # or just 422
      # render json: ["bad request"] # cant double render
    end
    
  end

  def show
    # debugger
    @chirp = Chirp.find_by_id(params[:id])
    render json: @chirp
  end

  def update
    @chirp = Chirp.find_by(id: params[:id])

    if @chirp.update(chirp_params) # update is like save but for an existing record
      redirect_to chirp_url(@chirp)
    else
      render json: @chirp.errors.full_messages, status: 422
    end
  end

  def destroy
    @chirp = Chirp.find_by(id: params[:id])
    @chirp.destroy
    # redirect_to chirps_url # go to the index
    render json: ["chirp deleted"]
  end

  private
  def chirp_params # strong params
    # require the chirp key and permit the attribute names
    params.require(:chirp).permit(:author_id, :body)
  end
  
end
