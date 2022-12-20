class AddDescription < ActiveRecord::Migration[7.0]
  def change
    add_column :teas, :description, :string
  end
end
