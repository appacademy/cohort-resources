require 'rails_helper'

RSpec.describe "Goals", type: :system do
  before do
    driven_by(:rack_test)
  end

  describe 'Creating a goal on user show page (hint: make sure your capitalization is exact!)' do
    context 'when logged in' do
      before do
        register_as_jack_bruce
        visit user_url(get_jack)
      end

      it 'has a form to "Add a New Goal"' do
        expect(page).to have_content 'Add a New Goal'
      end

      it 'takes a "Name" and "Details"' do
        expect(page).to have_content 'Name'
        expect(page).to have_content 'Details'
      end
      
      it 'has a radio button that allows a user to choose "true" if a goal is complete' do
        # Find all the radio buttons - there should only be 2
        radio_buttons = all('input[type=radio]', maximum: 2)
        # Finds the one radio button with the value of true
        true_button_array = radio_buttons.select{|input| input.value == "true"}
        expect(true_button_array).not_to be_empty
      end

      it 'has a radio button that allows a user to choose "false" if a goal is incomplete' do
        # Find all the radio buttons - there should only be 2
        radio_buttons = all('input[type=radio]', maximum: 2)
        # Finds the one radio button with the value of false
        false_button_array = radio_buttons.select{|el| el.value == "false"}
        expect(false_button_array).not_to be_empty
      end

      context 'on a successful save' do
        before do
          fill_in 'Name', with: 'Make a Pizza'
          fill_in 'Details', with: 'Mushroom Pizza'
          choose(option: 'false')
          click_button 'Create Goal'
        end

        it 'redirects to the user show page' do
          expect(current_path).to eq(user_path(get_jack))
          expect(page).to have_content 'Make a Pizza'
        end
      end

      context 'on a failed save' do
        before do
          fill_in 'Name', with: 'Make a Pizza'
          choose(option: 'false')
          click_button 'Create Goal'
        end

        it 'redirects to the user show page' do
          expect(current_path).to eq(user_path(get_jack))
        end

        it 'renders errors to the user' do
          expect(page).to have_content "Details can't be blank"
        end

        it 'still allows for a successful save' do
          fill_in 'Name', with: 'Make a Pizza'
          fill_in 'Details', with: 'Mushroom Pizza'
          choose(option: 'false')
          click_button 'Create Goal'
          expect(page).to have_content 'Make a Pizza'
        end
      end
    end
  end    

  describe 'Showing a user\'s goals (hint: make sure your capitalization is exact!)' do
    context 'showing goal `name` and `details`' do
      before do
        register_as_jack_bruce
        make_goal_for_jack('Laundry', 'Clean all the Clothes!', 'true')
        make_goal_for_jack('Cook', 'Make dinner tonight', 'false')
        visit user_url(get_jack)
      end

      it 'lists the names of a user\'s goals on the user\'s show page' do
        expect(page).to have_content 'Laundry'
        expect(page).to have_content 'Cook'
      end

      it 'lists the details of a user\'s goals on the user\'s show page' do
        expect(page).to have_content 'Clean all the Clothes!'
        expect(page).to have_content 'Make dinner tonight'
      end
    end

    context 'showing goal completion' do
      before do
        register_as_jack_bruce
        visit user_url(get_jack)
      end
      
      it 'signify a goal\'s non-completed status by NOT having the word "Done"' do
        make_goal_for_jack('Cook', 'Make dinner tonight', 'false')
        expect(page).not_to have_content 'Done'
      end

      it 'signify a goal\'s completed status by having the word "Done"' do
        make_goal_for_jack('Cook', 'Make dinner tonight', 'true')
        expect(page).to have_content 'Done'
      end
    end
  end

  describe 'Deleting goals' do
    before do
      register_as_jack_bruce
      make_goal_for_jack('Cook', 'Make dinner tonight', 'true')
    end

    it 'displays a remove button next to each goal' do
      expect(page).to have_button 'Delete Goal'
    end

    it 'removes the goal on click' do
      click_button 'Delete Goal'
      expect(page).to_not have_content 'Cook'
    end
  end
end
