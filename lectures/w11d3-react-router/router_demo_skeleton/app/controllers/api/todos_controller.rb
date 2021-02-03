class Api::TodosController < ApplicationController
  before_action :deny_access_if_not_logged_in

  def index
    # render json: Todo.all.where(user_id: current_user.id), include: :tags
    @todos = Todo.all.includes(:tags)
    # .where(user_id: current_user.id)
    render :index
  end

  def show
    # render json: Todo.find(params[:id]), include: :tags
    @todo = Todo.find(params[:id])
    render :show
  end

  def create
    @todo = current_user.todos.new(todo_params)
    if @todo.save
      render json: @todo, include: :tags
    else
      render json: @todo.errors.full_messages, status: 422
    end
  end

  def destroy
    @todo = current_user.todos.find(params[:id])
    @todo.destroy
    render json: @todo, include: :tags
  end

  def update
    @todo = Todo.find(params[:id])
    if @todo.update(todo_params)
      render json: @todo, include: :tags
    else
      render json: @todo.errors.full_messages, status: 422
    end
  end

  private

  def todo_params
    params.require(:todo).permit(:title, :body, :done, tag_names: [])
  end
end
