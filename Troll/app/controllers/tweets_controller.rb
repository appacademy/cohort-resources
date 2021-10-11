class TweetsController < ApplicationController
  before_action :require_logged_in, only:[:index, :show]

  def index
    tweets = Tweet.where(author_id: params[:user_id])
    render json: tweets
  end

  def show
    tweet = Tweet.find(params[:id])
    render json: tweet
  end
end
