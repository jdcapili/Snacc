class Api::DmGroupUsersController < ApplicationController
  def create
  
    users = User.where(:id => params[:dm_group_user][:user_ids]);

    users.each { |user| DmGroupUser.create(user: user, dm_group_id: params[:dm_group_user][:dm_group_id]) }
    
    @dm_group = DmGroup.includes(:members).find(params[:dm_group_user][:dm_group_id])

    render 'api/channels/show'
  end

  def destroy

    DmGroupUser.where(dm_group_id: params[:dm_group_user][:dm_group_id],
      user_id: current_user.id).destroy_all

    @dm_group = DmGroup.includes(:members).find(params[:dm_group_user][:dm_group_id])

    render 'api/dm_groups/show'
  end
end