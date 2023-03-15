# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  age             :integer          not null
#  password_digest :string           not null
#  session_token   :string           not null
#
require 'rails_helper'

RSpec.describe User, type: :model do
  # pending "add some examples to (or delete) #{__FILE__}"
  subject!(:valid_user) { create(:user) }

  context 'validates' do
    # it 'presence of username' do
    #   user = build(:user, username: "")
    #   expect(user.save).to be false
    #   expect(user.errors.full_messages).to eq ['Username can\'t be blank']
    # end

    # looks in database for an existing user and tries to create a duplicate
    # if db is empty, first creates a new user
    it { should validate_uniqueness_of(:username) }
    it { should validate_presence_of(:username) }
    it { should validate_length_of(:password).is_at_least(6) }
    it { should have_many(:chirps) }
  end
end
