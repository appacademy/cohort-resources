class RemoveDummyFromUsers < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :dummy_col
  end
end
