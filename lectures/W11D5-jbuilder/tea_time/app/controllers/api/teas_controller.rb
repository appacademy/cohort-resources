class Api::TeasController < ApplicationController
    def index
        @teas = Tea.all
        # render json: teas
        render :index
    end 

    def show 
        @tea = Tea.find(params[:id])
        render :show
    end

    def create
        @tea = Tea.new(tea_params)
        if @tea.save
            # render json: @tea
            render :info
        else
            render json: @tea.errors.full_messages, status: 422
        end
    end

    private
    def tea_params
        params.require(:tea).permit(:flavor, :amount, :description)
    end
end

