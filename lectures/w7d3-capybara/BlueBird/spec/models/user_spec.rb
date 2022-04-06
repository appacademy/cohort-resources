require 'rails_helper'

RSpec.describe User, type: :model do

  context 'validations' do
    let(:incomplete_user) { User.new(username: '', email:'email@aa.io', password: 'password') }
    # it 'validates presence of a username' do 
    #   expect(incomplete_user).to_not be_valid 
    # end


    it {should validate_presence_of(:username)} 
    it {should validate_presence_of(:password_digest)} 
    # it {should validate_presence_of(:session_token)} 
    # no need to test the presence of the session_token because ensure_session_token! always enforces that it is there 
    it {should validate_presence_of(:age)} 
    it {should validate_presence_of(:coding_pref)} 
    it {should validate_length_of(:password).is_at_least(6)}

    context 'uniqueness' do
      before(:each) do
        create(:user)
      end
      it {should validate_uniqueness_of(:username)} 
      it {should validate_uniqueness_of(:email)} 
      it {should validate_uniqueness_of(:session_token)} 

      # subject(:banana) {User.create( 
      #   username: 'banana', 
      #   email: 'banana@gmail.com', 
      #   age: 5, 
      #   password: 'password', 
      #   coding_pref: 'Ruby' 
      # )}
    end
  end  
    context 'associations' do 
      it { should have_many(:chirps) } 
      it { should have_many(:likes) } 
      it { should have_many(:liked_chirps).through(:likes) } 
    end

    describe 'is_password?' do 
      let!(:user) { create(:user) } # "You can use let! to force the method's invocation before each example." 
      # https://relishapp.com/rspec/rspec-core/v/2-11/docs/helper-methods/let-and-let 
      context "with a valid password" do 
          it "should return true" do 
              expect(user.is_password?("password")).to be true 
          end 
      end 
      context "with invalid password" do 
          it "should return false" do 
              expect(user.is_password?("invalidpassword")).to be false 
          end 
      end 
    end


  describe 'password hashing' do 
    it 'does not save password to the database' do 
        FactoryBot.create(:user, username: 'Harry Potter') 
        # create "Returns a saved User instance" 
        user = User.find_by(username: 'Harry Potter') 
        expect(user.password).not_to eq('password') 
    end 
    it 'hashes password using BCrypt' do  
        expect(BCrypt::Password).to receive(:create).with('abcdef') 
        FactoryBot.build(:user, password: 'abcdef') 
        # Returns a User instance that's not saved 
        # https://www.rubydoc.info/gems/factory_bot/file/GETTING_STARTED.md#build-strategies 
    end 
  end
end