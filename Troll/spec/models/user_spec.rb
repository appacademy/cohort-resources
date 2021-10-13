require 'rails_helper'

RSpec.describe User, type: :model do

  # let (:incomplete_user) { User.new(username: '', email: 'charis@gmail.com', password: 'password') } # isolate username validation
  # it "validates presence of a username" do
  #   expect(incomplete_user).to_not be_valid
  # end

  it { should validate_presence_of(:username) } # this replaces lines 5-8
  it { should validate_presence_of(:password_digest) }
  it { should validate_presence_of(:session_token) }
  it { should validate_length_of(:password).is_at_least(6) }
  it { should have_many(:tweets) }

  # validate_uniquness_of requires a subject! 
  # subject(:Toby) { User.create(username: 'Toby', email: 'toby@aa.io', age: 5, password: 'password') }

  describe "uniqueness" do
    before :each do
      create(:user) # uses the FactoryBot
    end

    it { should validate_uniqueness_of(:username) }
    it { should validate_uniqueness_of(:session_token) }
  end

  describe "is_valid_password?" do
    let!(:user) { create(:user) } # local variable - may or may not be the subject of the test

    context "with a valid password" do
      it "should return true" do
        expect(user.is_valid_password?('password')).to be true
      end
    end

    context "with an invalid password" do
      it "should return false" do
        expect(user.is_valid_password?('pineapple')).to be false
      end
    end
  end

  describe 'password encryption' do
    it 'does not save passwords to the database' do
      FactoryBot.create(:user, username: 'Harry Potter')
      # FactoryBot.create(:harry_potter) <-- this also works

      user = User.find_by(username: 'Harry Potter')
      expect(user.password).not_to eq('password')
    end

    it 'encrypts password using BCrypt' do
      expect(BCrypt::Password).to receive(:create).with('abcdef')

      FactoryBot.build(:user, password: 'abcdef')
    end
  end

end