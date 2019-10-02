require 'rails_helper'

RSpec.describe User, type: :model do


    let(:invalid_user) { User.new(username: "", password: "capybara")}

    # it 'validate presence of a username' do
    #     expect(invalid_user).to_not be_valid
    # end

    it { should validate_presence_of(:username) }
    it { should validate_presence_of(:password_digest) }
    it { should validate_length_of(:password).is_at_least(6) }

    it { should validate_uniqueness_of(:username) }
    subject(:sparkle) { User.create(
        username: 'sparkle',
        email: 'sparkle@gmail.com',
        age: 10,
        political_affiliation: "i didn't have breakfast",
        password: 'hunter12'
    )}


    describe 'session_token' do
        it 'assigns a session_token if none given' do
            expect(FactoryBot.build(:user).session_token).not_to be_nil
        end
    end

    it { should have_many(:chirps) }


    describe 'password encryption' do
        it 'does not save passwords to the database' do
            FactoryBot.create(:user, username: 'George')

            george = User.find_by(username: 'George')
            expect(george.password).not_to be('password')
        end

        it 'encrypts password using BCrypt' do
            expect(BCrypt::Password).to receive(:create).with('randomthings')

            FactoryBot.build(:user, password: 'randomthings')
        end
    end

end 