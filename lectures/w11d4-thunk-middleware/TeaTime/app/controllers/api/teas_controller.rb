# 
class Api::TeasController < ApplicationController
    def index
        teas = Tea.all
        # returns array-like active record association of modle instances of teas
        # returns response as json
        render json: teas
    end

    def create # adds a tea to the teas table in database
        tea = Tea.new(tea_params)
        debugger;
        if tea.save
            render json: tea
        else
            render json: tea.errors.full_messages, status: 422
        end
    end

    private
    def tea_params
        params.require(:tea).permit(:flavor, :amount)
    end
end
