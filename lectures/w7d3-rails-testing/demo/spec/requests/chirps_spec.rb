require 'rails_helper'

RSpec.describe "Chirps", type: :request do
  describe "GET /index" do
    describe "POST /chirps (#create)" do
      it "fails with invalid params" do
        # request
        post chirps_url, params: {
          chirp: {
            body: ''
          }
        }
        # assertion
        expect(response).not_to be_successful
        # expect(response).to have_http_status(422)
      end

      # can't test until we can log in a user
      # it "works" do
      #   post chirps_url, params: {
      #     chirp: {
      #       body: 'this is a test',
      #       author_id: 1
      #     }
      #   }

      #   expect(response).to be_successful
      #   expect(response).to redirect_to(chirps_url)
      # end
    end
  end
end
