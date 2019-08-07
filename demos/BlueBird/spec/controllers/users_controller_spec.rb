require 'rails_helper'

RSpec.describe UsersController, type: :controller do

  describe 'GET #new' do
    it 'renders the new users template' do
      get :new 
      expect(response).to render_template(:new)
    end
  end

  describe 'POST #create' do 

    let (:user_params) do 
      { user: {
          username: 'Toby',
          email: 'toby@aa.io',
          age: 6,
          political_affiliation: 'hufflepuff',
          password: 'password'
      }}
    end

    context 'with valid params' do 
      it 'logs in a user' do 
        post :create, params: user_params 

        user = User.find_by(username: 'Toby')
        expect(session[:session_token]).to eq(user.session_token)
      end

      it 'redirects to users show page' do 
        post :create, params: user_params

        user = User.find_by(username: 'Toby')
        expect(response).to redirect_to(user_url(user))
      end
    end

    context 'with invalid params' do 
      it 'validates presence of password and renders new template with errors' do 
        post :create, params: { user: { username: 'Tobias', email: 'toby@aa.io', password: '', age: 100, political_affiliation: 'dog' } }
        expect(response).to render_template(:new)
        expect(flash[:errors]).to be_present 
      end
    end


  end

end
