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
class Transaction < ApplicationRecord
    validates :quantity, presence:true

    belongs_to :tea

    belongs_to :user

end
