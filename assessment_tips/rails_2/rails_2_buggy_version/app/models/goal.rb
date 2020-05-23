class Goal < ApplicationRecord
    validates :name, :details, presence: true
    validates :status, inclusion: { in: [:true, :false] }

    belongs_to :user,
    foreign_key: :owner_id,
    class_name: "User"
end
