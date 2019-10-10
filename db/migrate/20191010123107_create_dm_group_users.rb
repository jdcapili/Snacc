class CreateDmGroupUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :dm_group_users do |t|
      t.integer :dm_group_id, null: false
      t.integer :user_id, null: false

      t.timestamps
    end
    add_index :dm_group_users, [:dm_group_id,:user_id], unique: true
  end
end
