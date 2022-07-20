class AddAgeAndFavCoin < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :age, :integer, null: false
    add_column :users, :favorite_coin, :string, null: false
  end
end
