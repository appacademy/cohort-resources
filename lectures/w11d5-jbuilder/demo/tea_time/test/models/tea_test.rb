# == Schema Information
#
# Table name: teas
#
#  id         :bigint           not null, primary key
#  flavor     :string           not null
#  amount     :float            not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require 'test_helper'

class TeaTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
