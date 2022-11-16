require 'rails_helper'

RSpec.describe "Chirps", type: :system do
  before do
    driven_by(:rack_test) # specifies headless browser
  end

  subject(:user) { create(:user) }

  it "logs in and creates a new chirp" do
    login(user)
    # save_page
    # save_and_open_page
    # save_screenshot
    # sove_and_open_screenshot
    click_on('user\'s chirps')
    click_on('Create a Chirp')
    fill_in('Body:', with: 'this is a test chirp')
    click_button('Create it')

    expect(current_path).to eq(user_chirps_path(user))
    expect(page).to have_content('this is a test chirp')
  end

end