# == Schema Information
#
# Table name: teas
#
#  id          :bigint           not null, primary key
#  flavor      :string           not null
#  price       :float            not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  description :text
#
require "test_helper"

class TeaTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
