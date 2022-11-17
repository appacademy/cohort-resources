class AddEmailToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :email, :string, null: false 
    # add_columm :table_name, :column_name, :data_type, constraints
  end
end
