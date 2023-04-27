class AddEsAndAgeToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :evil_score, :integer, null: false
    add_column :users, :age, :integer, null: false
    add_index :users, :evil_score
    # remove_column
    # rename_column
  end
end
