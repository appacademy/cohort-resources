class Api::ShirtsController < ApplicationController
  def index
    debugger
    shirts = Shirt.all
    render json: shirts
  end

  def create
    debugger
    shirt = Shirt.new(shirt_params)

    if shirt.save
      render json: shirt
    else
      render json: shirt.errors.full_messages, status: 422
    end
  end

  private

  def shirt_params
    params.require(:shirt).permit(:style,:price)
  end
end
