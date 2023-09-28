# == Schema Information
#
# Table name: transactions
#
#  id         :bigint           not null, primary key
#  quantity   :integer          not null
#  user_id    :bigint           not null
#  tea_id     :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Transaction < ApplicationRecord
    validates :quantity, presence: true

    belongs_to :user

    belongs_to :tea,
        primary_key: :id,
        foreign_key: :tea_id,
        class_name: :Tea
    


end
