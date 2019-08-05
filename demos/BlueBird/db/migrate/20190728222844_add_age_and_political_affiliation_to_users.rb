class AddAgeAndPoliticalAffiliationToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :political_affiliation, :string, null: false
    add_column :users, :age, :integer, null: false
    add_index :users, :age
    add_index :users, :political_affiliation
  end
end
