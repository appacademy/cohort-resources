require 'rails_helper'

RSpec.describe ChirpsController, type: :controller do

  describe "GET #index" do
    it "renders the chirps index" do
    # inside the test, we actually need to make a request to the test server. We can use 
    # the following syntax:
        allow(subject).to receive(:require_logged_in).and_return(true) 
        get :index 
        # the first term here is the type of request we want to make, and the second is the controller action we want to hit.

        # we use the following expectation for the test
        expect(response).to render_template(:index)
    end

    describe "GET #new" do 
        it "brings up the form to make a chirp" do 
            allow(subject).to receive(:require_logged_in).and_return(true) 
            get :new 
            expect(response).to render_template(:new) 
        end 
    end

    describe "DELETE #destroy" do 
    # let with bang is CREATE NOW IMMEDIATELY 
    # let without bang is CREATE WHEN NEEDED (lazy) 
        let!(:test_chirp) { create(:chirp) } #utilizes factory method
        before :each do 
            # We also need to make sure that current_user is going to return the chirp's author 
            # subject is by default this controller 
            allow(subject).to receive(:current_user).and_return(test_chirp.author) 
            # when we make this request, we have to specify the id of the chirp.  We can do that with an options hash that has a key of params. 
            # demonstrate the routing error if you don't give :show an id in the params. 
            delete :destroy, params: { id: test_chirp.id } 
        end 
        it "destroys the chirp" do 
            expect(Chirp.exists?(test_chirp.id)).to be false  
        end 
        it "redirects to chirps_url" do  
            expect(response).to have_http_status(302) #URL redirection status code 
            expect(response).to redirect_to(chirps_url) 
        end 
    end

    describe "POST #create" do 
        before :each do 
            create(:user) 
            allow(subject).to receive(:current_user).and_return(User.last)  
            # using the last user instance as our current_user, subject 
            # if we call .current_user on our subject, it should return User.last 
        end 
        let(:valid_params) { {chirp: {body: "Does writing chirps make me a chirper?"}} } 
        let(:invalid_params) { {chirp: {nada: ""}} }
        context "with valid params" do 
          it "creates the chirp" do 
              post :create, params: valid_params # make a post request, using the params we created above 
              expect(Chirp.last.body).to eq("Does writing chirps make me a chirper?") 
          end 
          it "redirects to chirps show" do 
              post :create, params: valid_params 
              expect(response).to redirect_to(chirp_url(Chirp.last.id)) 
          end 
      end
      context "with invalid params" do 
        before :each do 
            post :create, params: invalid_params 
        end 
        it "renders new template" do 
            expect(response).to render_template(:new) 
        end 
        it "adds errors to flash" do 
            expect(flash[:errors]).to be_present 
        end 
      end
    end  

  end

end