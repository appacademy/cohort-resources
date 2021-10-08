class AddPoliticalAffiliation < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :political_affiliation, :string
  end
end
