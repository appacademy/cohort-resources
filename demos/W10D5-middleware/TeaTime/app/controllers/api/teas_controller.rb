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
            render json: tea.errors.full_messages, stats: 422
        end
    end

    private
    def tea_params
        # this is expecting data to be { tea: { flavor: 'green', amount: 2.50 }}
        params.require(:tea).permit(:flavor, :amount) 
    end
end
