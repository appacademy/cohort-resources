class AddFavoriteCoinToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :favorite_coin, :string, null: false
    add_column :users, :age, :integer, null: false
  end
end
