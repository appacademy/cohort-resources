require 'rails_helper'

RSpec.describe "Chirps", type: :system do
  before do
    driven_by(:rack_test) #specifies browser in which system tests run
  end

  let(:user) { create(:user) }

  it "logs in and creates a new chirp" do
    # logs in
    # visit new_session_url
    # fill_in('username', with: user.username)
    # fill_in('password', with: user.password)
    # click_button("Submit")
    login(user)

    # create new chirp
    chirp_body = Faker::ProgrammingLanguage.name
    visit new_chirp_url
    fill_in('Body', with: chirp_body)
    # save_and_open_page
    click_button('Create')

    expect(page).to have_current_path(user_url(user))
    expect(page).to have_content(chirp_body)
  end

end