require 'rails_helper'

feature 'Sign Up (hint: make sure your capitalization is exact!)', type: :feature do
  before :each do
    visit new_user_path
  end

  it 'has a sign up page' do
    expect(page).to have_content 'Sign Up'
  end

  it 'takes a username and password' do
    expect(page).to have_content 'Username'
    expect(page).to have_content 'Password'
  end

  context 'on a successful save' do
    it 'logs the user in and redirects them to users index on success' do
      register_as_jack_bruce
      expect(current_path).to eq(users_path)
    end
  end
  
  context 'on a failed save' do
    before :each do
      visit new_user_path
      fill_in 'Username', with: 'LillyBilly'
      click_button 'Sign Up'
    end

    it 'renders errors to the user' do
      expect(page).to have_content "Password is too short (minimum is 6 characters)"
    end

    it 'prefills a user\'s information from a failed save' do
      expect(find_field('Username').value).to eq('LillyBilly')
    end
  end
end

feature 'Sign out' do
  it 'has a sign out button' do
    register_as_jack_bruce
    expect(page).to have_button 'Sign Out'
  end

  it 'logs a user out on click' do
    register_as_jack_bruce
    click_button 'Sign Out'

    # redirect to login page
    expect(current_path).to eq(new_session_path)
  end
end

feature 'Sign in' do
  it 'has a sign in page' do
    visit new_session_path
    expect(page).to have_content 'Sign In'
  end

  it 'takes a username and password' do
    visit new_session_path
    expect(page).to have_content 'Username'
    expect(page).to have_content 'Password'
  end

  context 'on a successful save' do
    it 'logs in a user and takes them to users index on success' do
      User.create!(username: 'jack_bruce', password: 'abcdef')

      # Sign in as newly created user
      sign_in_as_jack_bruce
      expect(current_path).to eq(users_path)
    end
  end
  
  context 'on a failed save' do
    before :each do
      visit new_session_path
      fill_in 'Username', with: 'LillyBilly'
      click_button 'Sign In'
    end

    it 'renders errors to the user' do
      expect(page).to have_content "Invalid username or password"
    end
  end
end
