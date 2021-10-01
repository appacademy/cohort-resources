class ChangeScoreToAge < ActiveRecord::Migration[5.2]
  def change
    rename_column :users, :troll_score, :age
  end
end
