class AddPoliAgeToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :coding_affiliation, :string, null: false
    add_column :users, :age, :integer, null: false
    add_index :users, :coding_affiliation
  end
end
