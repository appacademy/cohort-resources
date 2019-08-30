class Api::TeasController < ApplicationController

  def index
    teas = Tea.all
    render json: teas
  end

  def create
    tea = Tea.new(tea_params)

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
