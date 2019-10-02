class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username, null: false 
      t.timestamps 
    end

    add_index :users, :username, unique: true 
  end
end

# null: false is a database-level constraint 
# database will not allow you to create a row without a username 

# add_index sorts the rows by username, allowing us to use binary search (much faster - O(log n))
# must add_index in order to put unique: true 
# add_index, TABLE_NAME, COLUMN_NAME, unique: true 