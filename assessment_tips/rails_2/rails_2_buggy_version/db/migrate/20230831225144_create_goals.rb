class CreateGoals < ActiveRecord::Migration[7.0]
  def change
    create_table :goals do |t|
      t.string :name, null: false
      t.string :details
      t.boolean :states
      t.references :user, null: false, foreign_key: true
      t.timestamps
    end
  end
end
