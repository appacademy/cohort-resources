class GoalsController < ApplicationController
  before_action :require_logged_in!

  def create
    @goal = Goal.new(goal_params)
    if @goal.save!
      redirect_to user_url(params[:user_id])
    else
      flash[:errors] = @goal.errors.full_messages
      render :new
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
    params.require(:goal).permit(:name, :details, :status, :user_id)
  end
  
end
