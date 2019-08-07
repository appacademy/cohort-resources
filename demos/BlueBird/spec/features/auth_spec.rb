require 'rails_helper'

feature 'Sign Up' do 

  background :each do 
    visit new_user_path
  end

  scenario 'has a user sign up page' do 
    expect(page).to have_content('Sign Up')
  end

  scenario 'takes a username, password, email, etc' do 
    expect(page).to have_content('Username')
    expect(page).to have_content('Password')
  end

  scenario 'redirects to users show page on success' do 
    fill_in 'Username', with: 'Toby'
    fill_in 'email', with: 'Toby'
    fill_in 'password', with: 'password'
    fill_in 'age', with: 10
    fill_in 'political_affiliation', with: 'dog'

    click_button 'Sign Up'
    
    save_and_open_page
    expect(page).to have_content('Toby')
    user = User.find_by(username: 'Toby')
    expect(current_path).to eq(user_path(user))
    # expect(current_url).to eq(user_url(user))
  end
end