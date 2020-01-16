# == Schema Information
#
# Table name: chirps
#
#  id        :bigint           not null, primary key
#  body      :string(140)      not null
#  author_id :integer          not null
#

require 'test_helper'

class ChirpTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
