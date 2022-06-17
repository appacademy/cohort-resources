require 'rails_helper'

RSpec.describe GoalsController, type: :controller do
  let(:jack) { User.create!(username: 'jack_bruce', password: 'abcdef') }
  let(:jasmine) { User.create!(username: 'jasmine', password: 'abcdef') }
  let(:jasmine_goal) { Goal.create!(name: 'Clean the House', details: 'make it sparkle', status: 'true', user: jasmine) }

  before(:each) do
    allow_message_expectations_on_nil
  end

  describe 'POST #create' do

    before do
      allow(controller).to receive(:current_user) { jack }
    end

  # NOTE: for post requests, the user_id WILL be sent in the url, like so:
  # 'users/1/goals'
    it 'should route correctly' do 
      expect(:post => 'users/1/goals').to route_to(controller: 'goals', user_id: '1', action: 'create')
    end

    context 'when logged in' do
      context 'with invalid params' do
        it 'validates the presence of name and details and redirects to the user\'s show page' do
          post :create, params: { user_id: jasmine.id, goal: { name: 'this is an invalid goal', status: 'false' } }
          expect(response).to redirect_to(user_url(jasmine.id))
          expect(flash[:errors]).to eq(["Details can't be blank"])
        end
      end

      context 'with valid params' do
        it 'creates the goal and redirects to the user\'s show page' do
          post :create, params: {  user_id: jasmine.id, goal: { name: 'Exercise', details: 'do it', status: 'true' } }
          expect(response).to redirect_to(user_url(jasmine.id))
          expect(Goal.exists?(name: 'Exercise')).to be true
        end
      end
    end

    context 'when logged out' do
      before do
        allow(controller).to receive(:current_user) { nil }
      end

      it 'redirects to the login page' do
        post :create, params: { user_id: jasmine.id, goal: { name: 'Exercise Again!', details: 'Climb that mountain!', status: 'true' } }
        expect(response).to redirect_to(new_session_url)
      end
    end
  end


  describe 'DELETE #destroy' do
    context 'when logged in as the goal\'s owner' do
      before do
        allow(controller).to receive(:current_user) { jasmine }
      end

      it 'removes the goal and redirects back to the user index' do
        delete :destroy, params: { id: jasmine_goal.id }
        expect(response).to redirect_to(users_url)
        expect(Goal.exists?(jasmine_goal.id)).to be false
      end
    end

    context 'when NOT logged in as the goal\'s owner' do
      before do
        allow(controller).to receive(:current_user) { jack }
      end

      it 'does not remove the goal' do
        delete :destroy, params: { id: jasmine_goal.id }
        expect(Goal.exists?(jasmine_goal.id)).to be true
      end
    end

    context 'when logged out' do
      before do
        allow(controller).to receive(:current_user) { nil }
      end

      it 'does not remove the goal and redirects to the login page' do
        delete :destroy, params: { id: jasmine_goal.id }
        expect(Goal.exists?(jasmine_goal.id)).to be true
        expect(response).to redirect_to(new_session_url)
      end
    end
  end
end
