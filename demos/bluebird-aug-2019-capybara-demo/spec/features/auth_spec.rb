require 'rails_helper'

# Testing the sign up feature
feature 'Sign Up' do

    # before each test, we visit the sign up form (new_user_path)
    background :each do
        visit new_user_path
    end

    # testing for actual content on the page
    scenario 'has a user sign up page' do
        expect(page).to have_content('Sign Up')
    end

    # testing for labels on inputs. These specs will pass if 'Username', 'Password' or 'Email exist
    # anywhere on the page
    scenario 'takes a username, password, email, and age' do
        expect(page).to have_content('Username')
        expect(page).to have_content('Password')
        expect(page).to have_content('Email')
    end

    # Using capybara, this test will attempt to fill out our form and click the 'sign up' button
    # this tests that our inputs and submit button are named correctly,
    # our show page displays the user's name,
    # and that our url matches the user that was just created
    scenario 'redirect to a users show page and displays username on success' do
        fill_in 'username', with: 'Capy'
        fill_in 'email', with: 'Capy@aa.io'
        fill_in 'password', with: 'baraaa'

        click_button 'sign up'

        expect(page).to have_content('Capy')
        capy = User.find_by(username: 'Capy')
        expect(current_path).to eq(user_path(capy))
    end

end