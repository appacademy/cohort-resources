class UpdateTeas < ActiveRecord::Migration[7.0]
  def change
    add_column :teas, :description, :text
  end
end
