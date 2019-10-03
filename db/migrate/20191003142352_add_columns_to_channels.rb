class AddColumnsToChannels < ActiveRecord::Migration[5.2]
  def change
    add_column :channels, :channel_name, :string, null: false
    add_column :channels, :creator_id, :string, null: false
    add_index :channels, :creator_id
  end
end
