class Api::TransactionsController < ApplicationController

  def index
    @transactions = Transaction.where(tea_id: params[:tea_id])
    render :index
  end
  
end
