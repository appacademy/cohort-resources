require 'rails_helper'

RSpec.describe UsersController, type: :controller do
  subject (:jasmine) { User.create!(username: 'jasmine', password: 'abcdef') }
  let (:jack) { User.create!(username: 'jackyboy', password: 'abcdef') }

  describe 'GET #new' do
    it 'renders the new users template' do
      get :new
      expect(response).to render_template('new')
    end
  end

  describe 'POST #create' do
    context 'with invalid params' do
      it 'validates the presence of the user\'s username and password and returns the user to the sign up page' do
        post :create, params: { user: { username: 'jack_bruce', password: '' } }
        expect(response).to render_template('new')
        expect(flash[:errors]).to eq(["Password is too short (minimum is 6 characters)"])
      end

      it 'validates that the password is at least 6 characters long and returns the user to the sign up page' do
        post :create, params: { user: { username: 'jack_bruce', password: 'short' } }
        expect(response).to render_template('new')
        expect(flash[:errors]).to eq(["Password is too short (minimum is 6 characters)"])
      end
    end

    context 'with valid params' do
      it 'redirects user to users index on success' do
        post :create, params: { user: { username: 'jack_bruce', password: 'password' } }
        expect(response).to redirect_to(users_url)
      end

      it 'logs in the user' do
        post :create, params: { user: { username: 'jack_bruce', password: 'abcdef' } }
        user = User.find_by_username('jack_bruce')

        expect(session[:session_token]).to eq(user.session_token)
      end
    end
  end

  describe 'GET #show' do
    context 'when logged in' do
      before do
        allow(controller).to receive(:current_user) { jasmine }
      end

      it 'renders the show page of the specified user' do
        get :show, params: {id: jasmine.id}
        fetched_user = controller.instance_variable_get(:@user)
        expect(fetched_user).to eq(User.find(jasmine.id))
        expect(response).to render_template(:show)
      end
    end

    context 'when logged out' do
      before do
        allow(controller).to receive(:current_user) { nil }
      end

      it 'redirects to the login page' do
        get :show, params: {id: jasmine.id}
        expect(response).to redirect_to(new_session_url)
      end
    end
  end

  describe 'GET #index' do
    context 'when logged in' do
      before do
        allow(controller).to receive(:current_user) { jasmine }
      end

      it 'renders the index page of all the users' do
        get :index
        fetched_users = controller.instance_variable_get(:@users)
        expect(fetched_users).to eq(User.all)
        expect(response).to render_template(:index)
      end
    end

    context 'when logged out' do
      before do
        allow(controller).to receive(:current_user) { nil }
      end

      it 'redirects to the login page' do
        get :index
        expect(response).to redirect_to(new_session_url)
      end
    end
  end
end
