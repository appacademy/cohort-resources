class Api::TeasController < ApplicationController
  # controller is under the api folder to indicate we are sending back api/json info
  def index 
    @teas = Tea.all 
    render json: @teas 
  end

  def create
    # debugger
    tea = Tea.new(tea_params) # doesn't have to be @tea for now, no views 
    if tea.save
      render json: tea 
    else
      render json: tea.errors.full_messages, status: 422 
    end

  end 

  def tea_params 
    params.require(:tea).permit(:flavor, :price, :description)
  end
  
end
