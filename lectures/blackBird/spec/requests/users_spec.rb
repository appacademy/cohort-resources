require 'rails_helper'

RSpec.describe "Users", type: :request do
  describe "GET /index" do
    # pending "add some examples (or delete) #{__FILE__}"
    it "works" do 
      get users_url
      expect(response).to be_successful
    end
  end

  describe 'POST /create' do
    it "fails with invalid params" do
      post users_url, params: { user: { username: 'bob', password: 'pass', email: 'bob@aol.com', age: 16 }}
      expect(response).not_to be_successful
      expect(response.body).to include("too short")
    end
  end
end
