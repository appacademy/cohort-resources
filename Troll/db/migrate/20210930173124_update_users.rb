class UpdateUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :troll_score, :integer, null: false
    add_index :users, :troll_score
  end
end
