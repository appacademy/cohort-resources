class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      #t.datatype :column_name, database constraint
      t.string :username, null: false
      t.string :email, null: false
    end
    add_index :users, :username, unique: true
    add_index :users, :email, unique: true
  end
end
