require 'rails_helper'

RSpec.describe "Chirps", type: :request do
  describe "POST /chirps (#create)" do
    it "fails with invalid params" do
      post chirps_url, params: {
        chirp: {
          body: ''
        }
      }
      expect(response).to have_http_status(422)

    end
  end
end