class DeleteColumnOnDmGroups < ActiveRecord::Migration[5.2]
  def change
    remove_column :dm_groups, :group_name
  end
end
