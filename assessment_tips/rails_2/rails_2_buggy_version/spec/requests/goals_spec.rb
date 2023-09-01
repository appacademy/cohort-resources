require 'rails_helper'

RSpec.describe "Goals", type: :request do
  let(:jack) { User.create!(username: 'jack_bruce', password: 'abcdef') }
  let(:jasmine) { User.create!(username: 'jasmine', password: 'abcdef') }
  let(:jasmine_goal) { Goal.create!(name: 'Clean the House', details: 'make it sparkle', status: 'true', user: jasmine) }

  describe 'POST /users/:user_id/goals (#create)' do
    # NOTE: for post requests, the user_id WILL be sent in the url, like so:
    # 'users/1/goals'

    context 'when logged in' do
      before do
        log_in_as(jack)
      end

      context 'with invalid params' do
        it 'appropriately stores error messages for display and redirects to the user\'s show page' do
          post user_goals_url(jasmine), params: { goal: { name: 'this is an invalid goal', status: 'false' } }
          expect(response).to redirect_to(user_url(jasmine))
          expect(flash[:errors]).to eq(["Details can't be blank"])
        end
      end

      context 'with valid params' do
        it 'creates the goal and redirects to the user\'s show page' do
          post user_goals_url(jasmine), params: { user_id: jasmine.id, goal: { name: 'Exercise', details: 'do it', status: 'true' } }
          expect(response).to redirect_to(user_url(jasmine))
          expect(Goal.exists?(name: 'Exercise')).to be true
        end
      end
    end

    context 'when logged out' do
      it 'redirects to the login page' do
        post user_goals_url(jasmine), params: { user_id: jasmine.id, goal: { name: 'Exercise Again!', details: 'Climb that mountain!', status: 'true' } }
        expect(response).to redirect_to(new_session_url)
      end
    end
  end

  describe 'DELETE /goals/:id (#destroy)' do
    context 'when logged in as the goal\'s owner' do
      before do
        log_in_as(jasmine)
      end

      it 'removes the goal and redirects to the user index' do
        delete goal_url(jasmine_goal), params: { id: jasmine_goal.id }
        expect(response).to redirect_to(users_url)
        expect(Goal.exists?(jasmine_goal.id)).to be false
      end
    end

    context 'when NOT logged in as the goal\'s owner' do
      before do
        log_in_as(jack)
      end

      it 'does not remove the goal' do
        delete goal_url(jasmine_goal), params: { id: jasmine_goal.id }
        expect(Goal.exists?(jasmine_goal.id)).to be true
      end
    end

    context 'when logged out' do
      it 'does not remove the goal and redirects to the login page' do
        delete goal_url(jasmine_goal), params: { id: jasmine_goal.id }
        expect(Goal.exists?(jasmine_goal.id)).to be true
        expect(response).to redirect_to(new_session_url)
      end
    end
  end
end
