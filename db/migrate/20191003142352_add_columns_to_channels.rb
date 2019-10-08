class AddColumnsToChannels < ActiveRecord::Migration[5.2]
  def change
    remove_column :channels, :name
    add_column :channels, :channel_name, :string, null: false
  end
end
