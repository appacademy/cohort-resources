class CreateTeas < ActiveRecord::Migration[5.2]
  def change
    create_table :teas do |t|
      t.string :type
      t.float :amount
      t.timestamps 
    end
  end
end
