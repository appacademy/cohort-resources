class Api::TeasController < ApplicationController
  #controllers under the api folder to indicate we are sending back api/json info
  def index 
    @teas = Tea.all 
    render json: @teas 
  end

  def create 
    tea = Tea.new(tea_params) #doesn't have to be @tea. no more views 
    if tea.save
      render json: tea 
    else
      render json: tea.errors.full_messages, status: 422 
    end

  end 

  def tea_params 
    params.require(:tea).permit(:flavor, :amount)
  end
end
