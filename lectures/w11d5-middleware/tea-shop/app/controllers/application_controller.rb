class ApplicationController < ActionController::API
  before_action :snake_case_params

  private
  def snake_case_params
    params.deep_transform_keys!(&:underscore)
  end
end
