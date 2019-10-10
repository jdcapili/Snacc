class Api::DmGroupsController < ApplicationController

  before_action :ensure_logged_in

  def index
    #current user's dm_groups
    @dm_groups = DmGroup.includes(:messages).all #includes(:member_ids)??
    render 'api/dm_groups/index'
  end

  def show
    @dm_group = DmGroup.includes(:messages, :members).find(params[:id]) #.includes(:subscriber_ids)
    
    render 'api/dm_groups/show'
  end

  def create
    debugger
    @dm_group = DmGroup.new(dm_group_params);
    @dm_group.creator_id = current_user.id
    

    if @dm_group.save
      @dm_group.members << User.where(:id => params[:dm_group][:user_ids]) #user_ids include creator
      # DmGroupUser.create(user_id: current_user.id, dm_group_id: @dm_group.id)
      
      
      render 'api/dm_groups/show'
    else
      
      render json: @dm_group.errors.full_messages, status: 422
    end
  end

  def destroy
    
    @dm_group = DmGroup.find(params[:id])
    @dm_group.destroy
    render json: @dm_group.id
  end

  private
  def dm_group_params
    params.require(:dm_group).permit(:group_name)
  end
end

