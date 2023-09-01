# == Schema Information
#
# Table name: goals
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  details    :string           not null
#  status     :boolean          not null
#  user_id    :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require 'rails_helper'

RSpec.describe Goal, type: :model do
  it { should validate_presence_of(:name) }
  it { should validate_presence_of(:details) }
  it "should allow true/false--and only true/false--for :status" do
    aggregate_failures do
      should allow_values(true, false).for(:status)
      should_not allow_values(nil, "").for(:status)
    end
  end
  it { should belong_to(:user) }
end
