class GoalsController < ApplicationController

    before_action :require_login, only: [:create, :destroy]

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

    def destroy
        # @goal = current_user.goals.find(params[:id]) => Doesn't work, fails loudly
        # @goal = current_user.goals.find_by(id: params[:id]) => Works, uses associations
            # @goal.destroy if @goal => needs to follow previous line in case @goal == nil
        @goal = Goal.find_by(id: params[:id])
        if @goal.user_id == current_user.id
            @goal.destroy
        end
        redirect_to users_url
    end

    # Edit/Update not checked in rspec, should still study for assessment!

    def edit
        @goal = Goal.find(params[:id])
        render :edit
    end

    def update
        @goal = Goal.find(params[:id])
        if @goal.user_id == current_user.id
            if @goal.update(goal_params)
                redirect_to user_url(@goal.user_id)
            else
                flash[:errors] = @goal.errors.full_messages 
                render :edit  
            end
        else
            flash[:errors] = ["You don't own this goal"]
            render :edit
        end
    end

    def goal_params
        params.require(:goal).permit(:name, :details, :status)
    end
end
