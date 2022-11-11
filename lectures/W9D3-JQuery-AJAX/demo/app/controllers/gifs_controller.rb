class GifsController < ApplicationController

  def create
    debugger
    gif = Gif.new(gif_params)
    debugger
    if gif.save
      render json: gif
    else
      render json: gif.errors.full_messages, status: 422
    end
  end

  def show
    gif = Gif.find_by(title: params[:title])
    if gif
      render json: gif
    else
      render json: ["There is no GIF with that title!"], status: 422
    end
  end

private

  def gif_params
    params.require(:gif).permit(:title, :url)
  end

  # gif: { 
  #   title: 'coolGif',
  #   url: 'www.google.com'
  # }
end
