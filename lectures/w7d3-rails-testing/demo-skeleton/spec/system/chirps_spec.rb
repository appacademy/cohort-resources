require "rails_helper"

RSpec.describe "Chirps", type: :system do
  before do
    driven_by(:rack_test)
  end

  before(:each) do
    user = create(:user)
    login(user)
  end

  it "creates a new chirp" do
    p save_page
    click_on('Create a Chirp')
    fill_in("Body:", with: 'I am a chirpr')
    click_button("Create it")

    expect(page).to have_content('I am a chirpr')
  end
end