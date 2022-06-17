require 'rails_helper'


feature 'Creating a goal on User show page (hint: make sure your capitalization is exact!)', type: :feature do
  context 'when logged in' do
    before :each do
      register_as_jack_bruce
      visit user_url(User.find_by(username: 'jack_bruce'))
    end

    it 'has a form to add a new goal' do
      expect(page).to have_content 'Add a New Goal'
    end

    it 'takes a Name and Details' do
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
      before :each do
        register_as_jack_bruce
        visit user_url(User.find_by(username: 'jack_bruce'))
        fill_in 'Name', with: 'Make a Pizza'
        fill_in 'Details', with: 'Mushroom Pizza'
        choose(option: 'false')
        click_button 'Create Goal'
      end

      it 'redirects to the the user show page' do
        expect(current_path).to eq(user_path(User.find_by(username: 'jack_bruce')))
        expect(page).to have_content 'Make a Pizza'
      end

    end

    context 'on a failed save' do
      before :each do
        register_as_jack_bruce
        visit user_url(User.find_by(username: 'jack_bruce'))
        fill_in 'Name', with: 'Make a Pizza'
        choose(option: 'false')
        click_button 'Create Goal'
      end

      it 're-directs to the the user show page' do
        expect(current_path).to eq(user_path(User.find_by(username: 'jack_bruce')))
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

feature 'Showing a user\'s goals (hint: make sure your capitalization is exact!)', type: :feature do
  context 'showing goal name and details' do
    before :each do
      register_as_jack_bruce
      make_goal_for_jack('Laundry', 'Clean all the Clothes!', 'true')
      make_goal_for_jack('Cook', 'Make dinner tonight', 'false')
      visit user_url(User.find_by(username: 'jack_bruce'))
    end

    it 'on any user\'s show page it lists that user\'s goals names' do
      expect(page).to have_content 'Laundry'
      expect(page).to have_content 'Cook'
    end

    it 'on a user\'s show page it lists the details of that user\'s goals' do
      expect(page).to have_content 'Clean all the Clothes!'
      expect(page).to have_content 'Make dinner tonight'
    end

  end

  context 'showing goal completion' do
    before :each do
      register_as_jack_bruce
      jack = User.find_by(username: 'jack_bruce')
      visit user_url(jack)
    end
    
    it 'signify a goal\'s non-completed status by NOT having the word Done' do
      make_goal_for_jack('Cook', 'Make dinner tonight', 'false')
      expect(page).not_to have_content 'Done'
    end

    it 'signify a goal\'s completed status by having the word "Done"' do
      make_goal_for_jack('Cook', 'Make dinner tonight', 'true')
      expect(page).to have_content 'Done'
    end
  end
end



feature 'Deleting Goals' do
  before :each do
    register_as_jack_bruce
    make_goal_for_jack('Cook', 'Make dinner tonight', 'true')
  end

  it 'displays a remove button next to each Goal' do
    expect(page).to have_button 'Delete Goal'
  end

  it 'removes the Goal on click' do
    click_button 'Delete Goal'
    expect(page).to_not have_content 'Cook'
  end
end
