class GoalsController < ApplicationController
  before_action :require_logged_in, only: [:create, :destroy]

  def create
    @goal = Goal.create(goal_params)
    @goal.user_id = params[:user_id]
    
    if @goal.save
    else
      flash[:errors] = @goal.errors.full_messages
    end
    redirect_to user_url(@goal.user)

  end

  def destroy
    @goal = Goal.find_by(id: params[:id])
    @goal.destroy if @goal.user_id == current_user.id
    redirect_to users_url
  end

    def edit
    @goal = Goal.find(params[:id])
    render :edit
  end

  def update
    @goal = Goal.find(params[:id])
    if @goal.user_id == current_user.id
      if @goal && @goal.update(goal_params)
        redirect_to user_url(@goal.user_id)
      else
        flash[:errors] = @goal.errors.full_messages
        render :edit
      end
    else
      flash[:errors] = ['you must own to edit']
      render :edit
    end
  end

  private
  def goal_params
    params.require(:goal).permit(:name, :details, :status)
  end
end
