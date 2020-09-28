class UpdateShirtsTable < ActiveRecord::Migration[5.2]
  def change
    add_column :shirts, :color, :string 
    add_column :shirts, :image_url, :string 
  end
end
