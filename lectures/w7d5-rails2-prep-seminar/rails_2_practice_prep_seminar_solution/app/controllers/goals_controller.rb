class GoalsController < ApplicationController
  before_action :require_logged_in, only: [:create, :destroy, :edit, :update]
  def create
    @goal = Goal.new(goal_params)
    @goal.user_id = params[:user_id]
    if @goal.save
      redirect_to user_url(@goal.user_id)
    else
      flash[:errors] = @goal.errors.full_messages
      redirect_to user_url(@goal.user_id)
    end
  end

  def edit
    @goal = Goal.find_by(id: params[:id])
    render :edit
  end

  def update
    @goal = Goal.new(goal_params)
    if @goal.update
      redirect_to user_url(@goal.user_id)
    else
      flash.now[:errors] = @goal.errors.full_messages
      render :edit
    end
  end

  def destroy
    @goal = Goal.find_by(id: params[:id])
    if current_user.id == @goal.user_id
      @goal.destroy
      redirect_to users_url
    else

    end
  end


  def goal_params
    params.require(:goal).permit(:name, :details, :status, :user_id)
  end
end
