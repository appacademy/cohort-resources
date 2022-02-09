require 'rails_helper'

RSpec.describe User, type: :model do
  context 'validations' do
    #old way of checking things
    # let(:incomplete_user){User.new(username: '', email: 'email@aa.io', password: 'password')}
    # it 'validates presence of a username' do
    #   expect(incomplete_user).to_not be_valid
    # end

    #shoulda matcher way
    it {should validate_presence_of(:username)}
    it {should validate_presence_of(:password_digest)}
    it {should validate_presence_of(:age)}
    it {should validate_presence_of(:email)}
    it {should validate_presence_of(:coding_affiliation)}
    it {should validate_length_of(:password).is_at_least(6)}

    before(:each) do
      create(:user) #factory bot method calling to user factory
    end

    it {should validate_uniqueness_of(:username)}
    it {should validate_uniqueness_of(:email)}
    it {should validate_uniqueness_of(:session_token)}


    # subject(:banana) {User.create(
    #   username: 'banana',
    #   email: 'banana@gmail.com',
    #   age: 5,
    #   password: 'password',
    #   coding_affiliation: 'Ruby'
    # )}

    

  end
  context 'associations' do
    it {should have_many(:chirps)}
    it {should have_many(:likes)}
    it {should have_many(:liked_chirps)}


  end

  describe "is_password?" do
    let!(:user){create(:user)} #you can use let! to force method invocation before each test example

    context "with a valid password" do
      it "should return true" do
        expect(user.is_password?("password")).to be true
      end
    end
    context "with invalid password" do
      it "should return false" do
        expect(user.is_password?("notpassword")).to be false
      end
    end
  end

  describe 'password hashing' do
    it 'does not save password to the database' do
      # FactoryBot.create(:user, username: 'Harry Potter')
      create(:harry_potter)
      user = User.find_by(username: 'Harry Potter')
      expect(user.password).not_to eq("password")
    end

    it 'hashes password using BCrypt' do
      expect(BCrypt::Password).to receive(:create).with('abcdef')
      FactoryBot.build(:user, password:'abcdef') #Returns a user instance that is not saved
    end
  end

end