class AddEvilScoreToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :evil_score, :integer, null: false
  end
end
