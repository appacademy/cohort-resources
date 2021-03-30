class AddDescriptionToTeas < ActiveRecord::Migration[5.2]
  def change
    add_column :teas, :description, :string
  end
end
