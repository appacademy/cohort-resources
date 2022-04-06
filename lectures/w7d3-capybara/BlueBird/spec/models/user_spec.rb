require 'rails_helper'

RSpec.describe User, type: :model do 
    context "validations" do 
        let(:incomplete_user) {User.new(username: "", email:"email@aa.io", password:"password")}
        it "validates_presence_of_username" do 
            expect(incomplete_user).to_not be_valid
        end 
        it {should validate_presence_of(:username)} 
        it {should validate_presence_of(:email)}
        it {should validate_presence_of(:age)}
        it {should validate_presence_of(:password_digest)}
        it {should validate_length_of(:password).is_at_least(6) }

        context "uniqueness" do 
            before(:each) do 
                FactoryBot.create(:user)
            end 
            it {should validate_uniqueness_of(:username)}
            it {should validate_uniqueness_of(:email)}
            it {should validate_uniqueness_of(:session_token)}
            # subject(:banana) {User.create(username: "banana", email:"email@aa.io", password:"password", age:5, coding_pref: "ruby")}
        end 
    end 

    context "associations" do 
        it {should have_many(:chirps)} 
        it {should have_many(:likes)}
        it {should have_many(:liked_chirps).through(:likes)} 
    end 

    describe "password hashing" do 

        it "does not save password to the database" do 
            create(:user, username: "bilbo")
            user = User.find_by(username: "bilbo")
            expect(user.password).not_to eq("password") 
        end 

        it "hashes password using BCrypt" do 
            expect(BCrypt::Password).to receive(:create).with("abcdef")
            FactoryBot.build(:user, password:"abcdef")
        end 
    end 

end 
