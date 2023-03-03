class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :email, null:false 
     
      # t.data_type, :column_name , constraints: true/ false 

      t.timestamps
    end
    add_index :users, :username, unique: true
    add_index :users, :email, unique: true
    # method  :table_name, column_name, constraints 

  end
end
