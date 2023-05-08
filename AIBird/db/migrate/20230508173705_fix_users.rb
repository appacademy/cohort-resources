class FixUsers < ActiveRecord::Migration[7.0]
  def change
    remove_column :users, :email
    remove_column :users, :affiliation
    remove_column :users, :evil_score
    add_column :users, :email, :string
    add_column :users, :affiliation, :string
    add_column :users, :evil_score, :integer
  end
end
