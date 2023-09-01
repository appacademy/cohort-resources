require 'rails_helper'

RSpec.describe "Auth", type: :system do
  before do
    driven_by(:rack_test)
  end

  describe 'Sign Up (hint: make sure your capitalization is exact!)' do
    before do
      visit new_user_path
    end

    it 'has a "Sign Up" page' do
      expect(page).to have_content 'Sign Up'
    end

    it 'takes a "Username" and "Password"' do
      expect(page).to have_content 'Username'
      expect(page).to have_content 'Password'
    end

    context 'on a successful save' do
      it 'logs the user in and redirects them to the user index' do
        register_as_jack_bruce
        expect(current_path).to eq(users_path)
      end
    end
    
    context 'on a failed save' do
      before do
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

  describe 'Sign Out' do
    it 'has a "Sign Out" button' do
      register_as_jack_bruce
      expect(page).to have_button 'Sign Out'
    end

    it 'logs a user out on click and redirects to the sign-in page' do
      register_as_jack_bruce
      click_button 'Sign Out'

      # redirect to login page
      expect(current_path).to eq(new_session_path)
    end
  end

  describe 'Sign In' do
    it 'has a "Sign In" page' do
      visit new_session_path
      expect(page).to have_content 'Sign In'
    end

    it 'takes a "Username" and "Password"' do
      visit new_session_path
      expect(page).to have_content 'Username'
      expect(page).to have_content 'Password'
    end

    context 'on a successful save' do
      it 'logs in a user and takes them to the user index' do
        User.create!(username: 'jack_bruce', password: 'abcdef')

        # Sign in as newly created user
        sign_in_as_jack_bruce
        expect(current_path).to eq(users_path)
      end
    end
    
    context 'on a failed save' do
      before do
        visit new_session_path
        fill_in 'Username', with: 'LillyBilly'
        click_button 'Sign In'
      end

      it 'renders errors to the user' do
        expect(page).to have_content "Invalid username or password"
      end

      it 'prefills a user\'s information from a failed save' do
        expect(find_field('Username').value).to eq('LillyBilly')
      end
    end
  end
end
