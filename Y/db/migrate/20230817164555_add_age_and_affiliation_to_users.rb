class AddAgeAndAffiliationToUsers < ActiveRecord::Migration[7.0]
  def change
    # add_column :table_name, :column_name, :datatype, database_constraints
    add_column :users, :age, :integer
    add_column :users, :affiliation, :string
    # could add an index here if you wanted
  end
end
