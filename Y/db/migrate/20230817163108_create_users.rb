class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      # column_datatype :column_name, database_constraints
      t.string :username, null: false
      t.string :email, null: false
      t.timestamps # creates 2 columns, created_at date time and updated_at date time
    end
    
    # create fast look up for a user based on a column, allows unique constraint
    add_index :users, :username, unique: true
    add_index :users, :email, unique: true
  end
end
