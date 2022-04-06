require "rails_helper"

feature "creating a chirp", type: :feature do 
    before(:each) do 
        create(:user)
        login_user(User.last)
        visit new_chirp_url 
        # save_and_open_page
    end 

    scenario "takes a body input" do 
        expect(page).to have_content "Create a Chirp"
        expect(page).to have_content "Body:"
    end 

    scenario "takes us back to chirp show page" do 
        make_chirp("its warm in here")
        expect(page).to have_content "CHIRP"
        expect(page).to have_content "its warm in here"
        expect(current_path).to eq(chirp_path(Chirp.last))
    end 

    
end 


feature "dechirping a chirp" , type: :feature do 
    before(:each) do 
        create(:user)
        login_user(User.last)
        make_chirp("to be deleted")
        save_and_open_page
        click_button("Delete this chirp")
    end 
    scenario "dechirps a chirp" do 
        expect(page).to_not have_content("to be deleted")
        expect(page).to have_content("HERE ARE ALL OF OUR CHIRPS!")

    end 
end 