class Api::TeasController < ApplicationController
  # wrap_parameters Tea
  before_action :find_tea, only: [:show, :update, :destroy]

  def index
    @teas = Tea.all
    # render json: @teas
    render :index
  end

  def show
    # render json: @tea
    render :show
  end

  def create
    @tea = Tea.new(tea_params)
    if @tea.save
      # render json: @tea
      render :show
    else
      render json: @tea.errors.full_messages, status: 422
    end
  end
  
  def update
    if @tea && @tea.update(tea_params)
      # render json: @tea
      render :show
    else
      if @tea
        render json: @tea.errors.full_messages, status: 422
      else
        render json: ['No tea found'], status: 404
      end
    end
  end

  def destroy
    @tea.destroy
    head :no_content
  end

  private
  def tea_params
    params.require(:tea).permit(:id, :flavor, :price, :description)
  end

  def find_tea
    @tea = Tea.find_by(id: params[:id])
  end
end
