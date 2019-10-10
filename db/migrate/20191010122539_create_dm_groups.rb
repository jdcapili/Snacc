class CreateDmGroups < ActiveRecord::Migration[5.2]
  def change
    create_table :dm_groups do |t|
      t.string :group_name, null: false
      t.integer :creator_id, null: false

      t.timestamps
    end
    add_index :dm_groups, :creator_id
  end
end
