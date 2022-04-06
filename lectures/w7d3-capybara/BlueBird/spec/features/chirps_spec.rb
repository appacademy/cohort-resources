feature 'creating a chirp', type: :feature do 
  # We will have to always make sure there is a user. 
  #Disable the before action ensure_logged_in for right now.   
  #We aren't testing that login works, we're focusing on chirps features.   
  #In a full test suite, we would write a setup script that ensured were logged in. 
  before :each do 
    create(:user) 
    visit new_chirp_url 
    # Demo save_and_open_page 
  end

  scenario "takes a body" do 
    # have_content is capybara.  it allows us to check the actual html content of the page. 
    expect(page).to have_content "Create a Chirp" # because it's the new chirp page 
    expect(page).to have_content "Body:" # because we want to make sure a user can input 
  end

  scenario "takes us back to chirp show" do 
    log_in_user(User.last) 
    make_chirp("it's raining") 
    expect(page).to have_content "CHIRP" 
    expect(page).to have_content "it's raining" 
    expect(current_path).to eq(chirp_path(Chirp.last)) 
  end



end

feature 'dechirping a chirp', type: :feature do 
  before(:each) do 
    # ensure there's a user... 
    create(:user) 
    log_in_user(User.last) 
    # make sure we're at the proper page, and that we create a chirp... 
    make_chirp("to be deleted") 
    #delete that chirp 
    click_button('Delete this chirp') 
  end
  scenario "dechirps a chirp" do 
    #This is a great spot to look at save_and_open_page. Again, this is a combination of capybara and the launchy gem that let's us view the page at that point in time. 
    # save_and_open_page # opens html page at this moment to see what's going on 
    expect(page).to_not have_content("to be deleted") 
    expect(page).to have_content("HERE ARE ALL OF OUR CHIRPS!") 
    # exact wording/capitalization/spacing is very important  
  end
end