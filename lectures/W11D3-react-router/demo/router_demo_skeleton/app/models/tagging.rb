# == Schema Information
#
# Table name: taggings
#
#  id         :integer          not null, primary key
#  todo_id    :integer          not null
#  tag_id     :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Tagging < ApplicationRecord
  belongs_to :todo
  belongs_to :tag
end
