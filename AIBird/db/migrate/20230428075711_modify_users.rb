class ModifyUsers < ActiveRecord::Migration[7.0]
  def change
    remove_index :users, :evil_score
    remove_column :users, :age
    add_column :users, :affiliation, :string, null: false
  end
end
