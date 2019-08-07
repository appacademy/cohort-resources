require 'rails_helper'

RSpec.describe User, type: :model do
  let(:incomplete_user) { User.new(username: '', password: 'password')} 

  # it 'validates presence of a username' do 
  #   expect(incomplete_user).to_not be_valid 
  # end

  it { should validate_presence_of(:username) }
  it { should validate_presence_of(:password_digest) }
  it { should validate_length_of(:password).is_at_least(6) }

  it { should validate_uniqueness_of(:username) }
  subject(:toby) { User.create(
    username: 'toby',
    email: 'toby@aa.io',
    age: 5,
    political_affiliation: 'Hufflepuff',
    password: 'password'
  )}

  describe 'session_token' do 
    it 'assigns a session_token to the user if none given' do 
      expect(FactoryBot.build(:user).session_token).not_to be_nil 
    end
  end

  it { should have_many(:chirps) }

  describe 'password encryption' do 
    it 'encrypts password using bcrypt' do
      expect(BCrypt::Password).to receive(:create).with('abcdef')

      FactoryBot.build(:user, password: 'abcdef')
    end
  end



end