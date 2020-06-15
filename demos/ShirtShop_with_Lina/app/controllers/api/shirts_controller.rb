class Api::ShirtsController < ApplicationController
  def index
    # debugger
    @shirts = Shirt.all
    render :index
  end

  def create
    # debugger
    @shirt = Shirt.new(shirt_params)

    if @shirt.save
      render :basic
    else
      render json: @shirt.errors.full_messages, status: 422
    end
  end

  def show 
    @shirt = Shirt.find(params[:id])
    render :show 
  end

  private

  def shirt_params
    params.require(:shirt).permit(:style,:price)
  end
end
