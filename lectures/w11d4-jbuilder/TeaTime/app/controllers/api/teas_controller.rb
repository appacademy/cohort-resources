class Api::TeasController < ApplicationController

    def index
        @teas = Tea.all
        render json: @teas
    end

    def create
        @tea = Tea.new(tea_params)
        if @tea.save
            render json: @tea
        else
            render json: @tea.errors.full_messages, status: 422
        end
    end

    def show
        @tea = Tea.includes(transactions: :user).find_by(id: params[:id]) #transactions is an association being called on @tea and user is an association called on each trasaction.  Using includes will help avoid an n+1 query
        render json: @tea
    end


    def tea_params
        params.require(:tea).permit(:flavor, :price, :description, :amount)
    end
end
