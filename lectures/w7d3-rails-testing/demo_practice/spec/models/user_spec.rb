require 'rails_helper'

RSpec.describe User, type: :model do
  context 'validations' do
    let(:incomplete_user) { User.new(username: '', email: 'bob@bob.com', password: '123456', age: 67, favorite_coin: 'Doge')}
    it 'validates presence of username' do
      expect(incomplete_user.save).to be(false)
      expect(incomplete_user.errors.full_messages.first).to match(/[uU]sername/)
    end
  end
end