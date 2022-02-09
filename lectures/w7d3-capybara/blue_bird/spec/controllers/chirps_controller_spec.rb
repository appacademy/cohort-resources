require 'rails_helper'

RSpec.describe ChirpsController, type: :controller do

  describe "GET #index" do
    it 'renders the chirps index' do
      get :index
      expect(response).to render_template(:index)
    end      
  end

  describe "GET #new" do
    before(:each) {create(:user)}
    it 'brings up the form for a new chirp' do
      allow(subject).to receive(:current_user).and_return(User.last)
      get :new
      expect(response).to render_template(:new)
    end

  end

  describe "DELETE #destroy" do
    let!(:test_chirp) {create(:chirp)} #utilizes factory method

    before(:each) do
      #subject is by default the controller
      allow(subject).to receive(:current_user).and_return(test_chirp.author)
      delete :destroy, params: {id: test_chirp.id}
    end

    it "destroys the chirp" do
      expect(Chirp.exists?(test_chirp.id)).to be false
    end

    it "redirects to the chirp index" do
      expect(response).to have_http_status(302) #URL redirection status code
      expect(response).to redirect_to(chirps_url)
    end
    

  end

  describe "POST #create" do
    before(:each) do
      create(:user)
      allow(subject).to receive(:current_user).and_return(User.last)
    end
    let(:valid_params){{chirp: {body: "Does writing a chirp make me a chirper?"}}}
    let(:invalid_params){{chirp: {nada: ""}}}

    context "with valid params" do
      it "redirects to chirps show" do
        post :create, params: valid_params
        expect(response).to redirect_to(chirp_url(Chirp.last.id))
      end
      it "creates the chirp" do
        post :create, params: valid_params
        expect(Chirp.last.body).to eq("Does writing a chirp make me a chirper?")
      end
      
    end

    context "with invalid params" do
      it "renders to new page" do
        post :create, params: invalid_params
        expect(response).to render_template(:new)
      end

      it "flashes an error" do
        post :create, params: invalid_params
        expect(flash[:errors]).to be_present
      end
      
    end

  end



  
end