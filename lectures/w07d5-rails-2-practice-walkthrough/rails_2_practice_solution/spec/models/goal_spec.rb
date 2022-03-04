require 'rails_helper'

RSpec.describe Goal, type: :model do
  it { should validate_presence_of(:name) }
  it { should validate_presence_of(:details) }
  it { should allow_value(true, false).for(:status) }
  it { should belong_to(:user) }
end
