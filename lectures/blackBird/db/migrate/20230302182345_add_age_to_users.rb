class AddAgeToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :age, :integer, null: false
    # method :table_name, :column_name, :data_type, contraints
  end
end
