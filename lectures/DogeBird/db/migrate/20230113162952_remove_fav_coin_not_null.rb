class RemoveFavCoinNotNull < ActiveRecord::Migration[7.0]
  def change
    remove_column :users, :favorite_coin
    add_column :users, :favorite_coin, :string
  end
end
