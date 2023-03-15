class CreatePenguins < ActiveRecord::Migration[7.0]
  def change
    create_table :penguins do |t|

      t.timestamps
    end
  end
end
