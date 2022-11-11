class RemoveCoinRequirement < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :favorite_coin
    add_column :users, :favorite_coin, :string
  end
end
