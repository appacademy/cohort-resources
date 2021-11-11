# == Schema Information
#
# Table name: transactions
#
#  id         :bigint           not null, primary key
#  tea_id     :integer          not null
#  user_id    :integer          not null
#  quantity   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require 'test_helper'

class TransactionTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
