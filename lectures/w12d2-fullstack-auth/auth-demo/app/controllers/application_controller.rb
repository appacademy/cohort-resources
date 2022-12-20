class ApplicationController < ActionController::API
  include ActionController::RequestForgeryProtection

    protect_from_forgery with: :exception
    before_action :snake_case_params
    before_action :attach_authenticity_token

    private
    def snake_case_params
        params.deep_transform_keys!(&:underscore)
    end

    def attach_authenticity_token
        headers['X-CSRF-Token'] = masked_authenticity_token(session)
        # headers['X-CSRF-Token'] = form_authenticity_token
    end
end
