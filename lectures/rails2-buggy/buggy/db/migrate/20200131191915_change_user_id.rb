class ChangeUserId < ActiveRecord::Migration[5.2]
  def change
    remove_column :goals, :user_id
    add_column :goals, :owner_id, :integer, null:false
  end
end
