class AddAgeAndCodePreferenceToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :coding_pref, :string, null: false
    add_column :users, :age, :integer, null: false
    #method :table_name, :column_name, :datatype, db_constraint
  end
end
