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
            render json: tea.errors.full_messages, status: :unprocessable_entity # 422
        end
    end

    private
    def tea_params
        params.require(:tea).permit(:flavor, :price)
    end
end
