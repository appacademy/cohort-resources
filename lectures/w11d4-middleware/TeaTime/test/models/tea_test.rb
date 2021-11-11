# == Schema Information
#
# Table name: teas
#
#  id          :bigint           not null, primary key
#  flavor      :string           not null
#  cost        :float            not null
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
require 'test_helper'

class TeaTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
