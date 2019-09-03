class Api::ApiController < ApplicationController
  before_action :ensure_logged_in

  private
  def ensure_logged_in
    unless logged_in?
      render json: ["You must be logged in to do that"], status: 401
    end
  end
end
