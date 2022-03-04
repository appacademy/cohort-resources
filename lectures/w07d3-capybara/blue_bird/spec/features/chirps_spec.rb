require "rails_helper"

feature 'creating a chirp', type: :feature do

  before :each do
    create(:user)
    log_in_user(User.last)
    visit new_chirp_url
  end

  scenario "takes a body" do
    expect(page).to have_content "Create a Chirp"
    expect(page).to have_content "Body:"
    
  end

  scenario "takes us back to chirp show page" do
    make_chirp("it is a sunny day!")
    expect(page).to have_content "CHIRP"
    expect(page).to have_content "it is a sunny day!"
    expect(current_path).to eq(chirp_path(Chirp.last))

    
  end

end

feature 'Dechirping a chirp', type: :feature do
  before(:each) do
    create(:user)
    log_in_user(User.last)
    make_chirp("to be deleted")
    click_button('Delete this chirp')
  end

  scenario 'dechirps a chirp' do
    expect(page).to_not have_content("to be deleted")
    expect(page).to have_content("HERE ARE ALL OF OUR CHIRPS!")
    
  end
  
end