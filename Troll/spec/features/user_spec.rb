require 'rails_helper'

# "features" are end-to-end tests which simulate the user interacting with the page
feature "has complete user auth", type: :feature do

  feature "creating a user", type: :feature do

    background :each do
      visit new_user_url
    end

    scenario "can create a new user" do # this is like an "it" block
      fill_in('username', with: 'sam_i_am')
      fill_in('password', with: 'password')
      fill_in('email', with: 'sam@aa.io')
      fill_in('age', with: 15)

      click_button('CREATE USER')

      expect(page).to have_content('Hello, sam_i_am')
      expect(current_path).to eq(user_path(User.last.id))
      expect(page).to have_button('Log Out!')
    end

  end

  feature "can log in and log out a user", type: :feature do
    background :each do
      create(:user) # calling the FactoryBot to create a User object
    end

    scenario "can log in a user" do
      login_user(User.last)
      expect(page).to have_content "Hello, #{User.last.username}"
      expect(current_path).to eq(users_path)
    end

    scenario "can log out a user" do
      login_user(User.last)
      visit root_url # not necessary in this case, but it's an option
      
      # expect(page).to have_button 'Log Out!'
      click_button('Log Out!') # this will fail if the button doesn't exist!
      expect(page).to have_content 'Successfully logged out!'
      expect(current_path).to eq(new_session_path)
    end

  end

end