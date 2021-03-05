class GoalsController < ApplicationController

    before_action :require_signed_in!

    def create
        @goal = Goal.new(goal_params)
        @goal.owner_id = params[:owner_id]

        if @goal.save
            redirect_to user_url(@goal.user)
        else
            flash[:errors] = @goal.errors.full_messages
        end
    end

    def destroy
        @goal = current_user.goals.find_by(id: params[:id])
        if @goal && @goal.delete 
            redirect_to users_url
        end
    end
 
    private

    def goal_params
        params.require(:goal).permit(:name, :details, :status)
    end
    
end
