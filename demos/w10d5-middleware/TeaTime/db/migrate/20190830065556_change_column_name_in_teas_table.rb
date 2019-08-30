class ChangeColumnNameInTeasTable < ActiveRecord::Migration[5.2]
  def change
    rename_column :teas, :type, :flavor
  end
end
