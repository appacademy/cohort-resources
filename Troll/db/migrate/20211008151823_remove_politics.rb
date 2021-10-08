class RemovePolitics < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :political_affiliation, :string
  end
end
