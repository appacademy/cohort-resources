require 'rails_helper'

RSpec.describe User, type: :model do
  context 'validations' do
    subject { create(:user) }
    let(:invalid_user) { build(:user, username: '') }
    it 'validates presence of username' do
      expect(invalid_user.save).to be(false)
      expect(invalid_user.errors.full_messages.first).to match(/[Uu]sername/)
    end
    it { should validate_uniqueness_of(:username) }
    it { should validate_length_of(:password).is_at_least(6) }
  end
end