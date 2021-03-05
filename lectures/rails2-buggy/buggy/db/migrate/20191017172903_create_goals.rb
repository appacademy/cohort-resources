class CreateGoals < ActiveRecord::Migration[5.2]
  def change
    create_table :goals do |t|
      t.string :name, null: false
      t.string :details, null: false
      t.boolean :status, null: false
      t.integer :user_id, null: false

      t.timestamps
    end
  end
end
