class Api::TeasController < ApplicationController
  # controller is under the api folder to indicate we are making backend requests

  def index
    @teas = Tea.all
    render json: @teas
  end

  def create
    # debugger
    @tea = Tea.new(tea_params)
    if @tea.save # remember no bang
      render json: @tea
    else
      render json: @tea.errors.full_messages, status: 422
    end
  end

  def tea_params
    params.require(:tea).permit(:flavor, :price, :description)
  end
  
end
