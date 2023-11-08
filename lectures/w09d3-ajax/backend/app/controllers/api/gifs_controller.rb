class Api::GifsController < ApplicationController
  def index
    # require `title` in params
    @gif = Gif.find_by(title: params[:title])
    render json: @gif
  end

  def create
    @gif = Gif.new(gif_params)
    if @gif.save
      render json: @gif
    else
      render json: @gif.errors.full_messages, status: 422
    end
  end

  private
  def gif_params
    params.require(:gif).permit(:title, :url)
  end
end
