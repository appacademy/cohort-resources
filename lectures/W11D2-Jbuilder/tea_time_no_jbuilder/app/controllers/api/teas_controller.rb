class Api::TeasController < ApplicationController
    def index 
      @teas = Tea.all 
      render :index 
    end

    def show 
      #          avoid n+1 queries
      @tea = Tea.includes(transactions: [:user]).find(params[:id])
      render :show
    end
  
    def create 
      @tea = Tea.new(tea_params) 
      if @tea.save
        render :info 
      else
        render json: @tea.errors.full_messages, status: 422 
      end
  
    end 
  
    def tea_params 
      params.require(:tea).permit(:flavor, :amount, :description)
    end
end
  
