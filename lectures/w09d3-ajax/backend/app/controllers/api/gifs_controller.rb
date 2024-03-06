class Api::GifsController < ApplicationController
  def index

  end

  def create
    @gif = Gif.new(gif_params)
    if @gif.save
      render json: @gif
    else
      render json: @gif.errors.full_messages, status: :unprocessible_entity
    end
  end

  private
  def gif_params
    params.require(:gif).permit(:title, :url)
  end
end
