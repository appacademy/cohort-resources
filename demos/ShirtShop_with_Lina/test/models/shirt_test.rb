# == Schema Information
#
# Table name: shirts
#
#  id         :bigint           not null, primary key
#  color      :string
#  image_url  :string
#  price      :float
#  style      :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require 'test_helper'

class ShirtTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
