require 'rails_helper'

RSpec.describe ChirpsController, type: :controller do 
    describe "get #index" do 
        it "renders the chirps index" do 
            allow(subject).to receive(:require_logged_in).and_return(true) 
            get :index 
            expect(response).to render_template(:index) 
        end 
    end    
    
    describe "delete #destroy" do 
        let!(:test_chirp){create(:chirp)}
        before(:each) do 
            allow(subject).to receive(:current_user).and_return(test_chirp.author)
            delete :destroy, params: {id: test_chirp.id}
            
        end 
        it "destroys the chirps" do 
            expect(Chirp.exists?(test_chirp.id)).to be false 
        end 

        it "redirects to chirps_url" do 
            expect(response).to redirect_to(chirps_url)
            expect(response).to have_http_status(302)
        end
    end 
    
end 