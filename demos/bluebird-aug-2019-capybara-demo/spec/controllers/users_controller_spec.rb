require 'rails_helper'

RSpec.describe UsersController, type: :controller do

  describe 'GET #new' do
    it 'renders the new users template' do
        get :new 
        expect(response).to render_template(:new)
    end
  end


describe 'POST #create' do  
    let(:user_params) do
        { user: {
                username: 'Clauddy',
                password: 'mummyreturns',
                email: 'clauddy@gmail.com',
                age: 26
            }
        }
    end

    context 'with valid params' do
        it 'logs in the user' do
            post :create, params: user_params

            clauddy = User.find_by(username: 'Clauddy')
            expect(session[:session_token]).to eq(clauddy.session_token)
        end
        it 'redirects to the users show page' do
            post :create, params: user_params

            clauddy = User.find_by(username: 'Clauddy')
            expect(response).to redirect_to(user_url(clauddy))
        end
    end

    context 'with invalid params' do
        it 'validates the presence of password and renders the new template with errors' do
            post :create, params: { user: { username: 'Chris', email: 'chris@aa.io', password: '' } }

            expect(response).to render_template(:new)
            expect(flash[:errors]).to be_present
        end
    end
    
  end

end
