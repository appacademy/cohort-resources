class Api::GifsController < ApplicationController
  def show
    gif = Gif.find_by(title: params[:title])
    if gif
      render json: gif
    else
      render json: ['No such GIF with that title'], status: 404
    end
  end

  def create
    gif = Gif.new(gif_params)
    if gif.save
      render json: gif
    else
      render json: gif.errors.full_messages, status: 422
    end
  end

  private
  def gif_params
    params.require(:gif).permit(:title, :url)
  end
end
