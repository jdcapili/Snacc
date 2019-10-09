class Api::ChannelUsersController < ApplicationController
  def create
    # debugger
    user = User.find(params[:channel_user][:user_id]);
    @channel = Channel.find(params[:channel_user][:channel_id])
    
    ChannelUser.create(user: user, channel: channel)

    render 'api/channels/show'
  end

  def destroy
    user = User.find(params[:channel_user][:user_id]);
    @channel = Channel.find(params[:channel_user][:channel_id])
 
    ChannelUser.find_by(user: user, channel: @channel)
    
    render 'api/channels/show'
  end
end
