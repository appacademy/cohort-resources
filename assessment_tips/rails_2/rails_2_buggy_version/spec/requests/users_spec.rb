require 'rails_helper'

RSpec.describe "Users", type: :request do
  subject (:jasmine) { User.create!(username: 'jasmine', password: 'abcdef') }
  let (:jack) { User.create!(username: 'jackyboy', password: 'abcdef') }

  describe 'GET /users/new (#new)' do
    it 'renders the "Sign Up" form' do
      get new_user_url
      expect(response.body).to include("Sign Up")
      expect(response.body).not_to include("Sign In")
      expect(response.body).not_to include("All Users")
      expect(response.body).not_to include("Goals for")
    end
  end

  describe 'POST /users (#create)' do
    context 'with blank username' do
      it 'returns to the "Sign Up" page and appropriately stores "Username can\'t be blank" error message for display' do
        post users_url, params: { user: { username: '', password: 'abcdef' } }
        expect(response.body).to include("Sign Up")
        expect(response.body).not_to include("Sign In")
        expect(response.body).not_to include("All Users")
        expect(response.body).not_to include("Goals for")
        expect(flash.now[:errors]).to eq(["Username can't be blank"])
      end
    end

    context 'with too-short password' do
      it 'returns to the "Sign Up" page and appropriately stores "Password is too short (minimum is 6 characters)" for display' do
        post users_url, params: { user: { username: 'jack_bruce', password: 'short' } }
        expect(response.body).to include("Sign Up")
        expect(response.body).not_to include("Sign In")
        expect(response.body).not_to include("All Users")
        expect(response.body).not_to include("Goals for")
        expect(flash.now[:errors]).to eq(["Password is too short (minimum is 6 characters)"])
      end
    end

    context 'with valid params' do
      it 'redirects to the user index' do
        post users_url, params: { user: { username: 'jack_bruce', password: 'password' } }
        expect(response).to redirect_to(users_url)
      end

      it 'logs in the user' do
        post users_url, params: { user: { username: 'jack_bruce', password: 'abcdef' } }
        user = User.find_by_username('jack_bruce')
        expect(session[:session_token]).to eq(user.session_token)
      end
    end
  end

  describe 'GET /users/:id (#show)' do
    context 'when logged in' do
      before do
        log_in_as(jasmine)
      end

      it 'renders the specified user\'s show page displaying "Goals for <user\'s username>"' do
        get user_url(jasmine), params: {id: jasmine.id}
        fetched_user = controller.instance_variable_get(:@user)
        expect(fetched_user).to eq(User.find(jasmine.id))
        expect(response.body).to include("Goals for jasmine")
        expect(response.body).not_to include("Sign In")
        expect(response.body).not_to include("All Users")
        expect(response.body).not_to include("Sign Up")
      end
    end

    context 'when logged out' do
      it 'redirects to the login page' do
        get user_url(jasmine), params: {id: jasmine.id}
        expect(response).to redirect_to(new_session_url)
      end
    end
  end

  describe 'GET /users (#index)' do
    context 'when logged in' do
      before do
        log_in_as(jasmine)
      end

      it 'renders the index page displaying "All Users"' do
        get users_url
        expect(response.body).to include("All Users")
        expect(response.body).not_to include("Sign In")
        expect(response.body).not_to include("Sign Up")
        expect(response.body).not_to include("Goals for")
      end
    end

    context 'when logged out' do
      it 'redirects to the login page' do
        get users_url
        expect(response).to redirect_to(new_session_url)
      end
    end
  end
end
