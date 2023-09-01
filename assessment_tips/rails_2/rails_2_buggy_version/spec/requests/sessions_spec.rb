require 'rails_helper'

RSpec.describe "Session", type: :request do
  let!(:user) { User.create({ username: 'jack_bruce', password: 'abcdef' }) }

  describe 'GET /session/new (#new)' do
    it 'renders the "Sign In" form' do
      get new_session_url
      expect(response.body).to include("Sign In")
      expect(response.body).not_to include("Sign Up")
      expect(response.body).not_to include("All Users")
      expect(response.body).not_to include("Goals for")
    end
  end

  describe 'POST /session (#create)' do
    context 'with non-existent user' do
      it 'returns to "Sign In" form and appropriately stores "Invalid username or password" error message for display' do
        post session_url, params: { user: { username: 'new_person', password: 'abcdef' } }
        expect(response.body).to include("Sign In")
        expect(response.body).not_to include("Sign Up")
        expect(response.body).not_to include("All Users")
        expect(response.body).not_to include("Goals for")
        expect(flash.now[:errors]).to eq(['Invalid username or password'])
      end
    end

    context 'with bad password' do
      it 'returns to "Sign In" form and appropriately stores "Invalid username or password" error message for display' do
        post session_url, params: { user: { username: 'jack_bruce', password: 'notmypassword' } }
        expect(response.body).to include("Sign In")
        expect(response.body).not_to include("Sign Up")
        expect(response.body).not_to include("All Users")
        expect(response.body).not_to include("Goals for")
        expect(flash.now[:errors]).to eq(['Invalid username or password'])
      end
    end

    context 'with valid credentials' do
      it 'redirects to the user index on success' do
        post session_url, params: { user: { username: 'jack_bruce', password: 'abcdef' } }
        expect(response).to redirect_to(users_url)
      end

      it 'logs in the user' do
        post session_url, params: { user: { username: 'jack_bruce', password: 'abcdef' } }
        user = User.find_by_username('jack_bruce')
        expect(session[:session_token]).to eq(user.session_token)
      end
    end
  end

  describe 'DELETE /session (#destroy)' do
    context 'when logged in' do
      before do
        post session_url, params: { user: { username: 'jack_bruce', password: 'abcdef' } }
        @session_token = User.find_by_username('jack_bruce').session_token
      end

      it 'logs out the current user' do
        delete session_url
        expect(session[:session_token]).to be_nil

        jack = User.find_by_username('jack_bruce')
        expect(jack.session_token).not_to eq(@session_token)
      end
    end

    context 'when logged out' do
      it 'redirects to the login page' do
        delete session_url
        expect(response).to redirect_to(new_session_url)
      end
    end
  end
end
