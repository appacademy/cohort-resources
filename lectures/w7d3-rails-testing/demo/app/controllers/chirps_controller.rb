class ChirpsController < ApplicationController

  # def index
  #   chirps = Chirp.all
  #   render json: chirps
  # end

  def index
    if params[:user_id]
      user = User.find_by(id: params[:user_id])
      @chirps = user.chirps
      render :index
    else
      @chirps = Chirp.all
      render :index
    end
  end

  def show
    # debugger
    @chirp = Chirp.find(params[:id])
    render json: @chirp
  end

  def new
    @chirp = Chirp.new
    render :new
  end

  def create
    @chirp = Chirp.new(chirp_params)
    @chirp.author_id = current_user.id
    if @chirp.save
      redirect_to user_chirps_url(current_user)
      # redirect_to "/chirps/#{chirp.id}"
    else
      render json: @chirp.errors.full_messages, status: 422 #:unprocessable_entity
    end
  end

  def update
    @chirp = Chirp.find_by(id: params[:id])
    if @chirp.update(chirp_params)
      redirect_to chirp_url(@chirp.id)
    else
      render json: @chirp.errors.full_messages, status: 422 #:unprocessable_entity
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