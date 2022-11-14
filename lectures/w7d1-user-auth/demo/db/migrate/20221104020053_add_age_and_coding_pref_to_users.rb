class AddAgeAndCodingPrefToUsers < ActiveRecord::Migration[7.0]
  def change

    add_column :users, :coding_pref, :string
    add_column :users, :age, :integer, null: false
  end
end
