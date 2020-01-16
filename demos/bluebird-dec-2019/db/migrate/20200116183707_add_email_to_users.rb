class AddEmailToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :email, :string, limit: 100 
    add_column :users, :dummy_col, :string, limit: 100
  end
end
