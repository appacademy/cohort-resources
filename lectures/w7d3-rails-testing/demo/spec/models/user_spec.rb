require 'rails_helper'

RSpec.describe User, type: :model do
  subject(:valid_user) { create(:user) }
  
  context 'validates' do
    it 'presence of username' do
      p valid_user
      user = build(:user, username: '')
      expect(user.save).to be(false)
      expect(user.errors.full_messages).to eq(['Username can\'t be blank'])
    end

    it { should validate_uniqueness_of(:username) }
    it { should validate_length_of(:password).is_at_least(6) }
    it { should have_many(:chirps) }
  end
end
