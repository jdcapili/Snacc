class Api::ChannelUsersController < ApplicationController
  def create
  
    
    
    
    users = User.where(:id => params[:channel_user][:user_ids]);

    users.each { |user| ChannelUser.create(user: user, channel_id: params[:channel_user][:channel_id]) }
    
    @channel = Channel.includes(:subscribers).find(params[:channel_user][:channel_id])

    render 'api/channels/show'
  end

  def destroy
    # user = User.find(params[:channel_user][:user_id]);
    # @channel = Channel.find(params[:channel_user][:channel_id])
 
    # ChannelUser.find_by(user: user, channel: @channel)

    ChannelUser.where(channel_id: params[:channel_user][:channel_id],
      user_id: current_user.id).destroy

    @channel = Channel.includes(:subscribers).find(params[:channel_user][:channel_id])

    render 'api/channels/show'
  end
end
