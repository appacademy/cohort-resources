class ChangeUsers < ActiveRecord::Migration[5.2]
  def change
    change_column_null :users, :coding_pref, true
  end
end
