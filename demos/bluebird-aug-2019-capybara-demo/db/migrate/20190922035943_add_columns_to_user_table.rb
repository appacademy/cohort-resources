class AddColumnsToUserTable < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :political_affiliation, :string
    add_column :users, :age, :integer
  end
end
