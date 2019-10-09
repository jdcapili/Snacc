class Api::ChannelUsersController < ApplicationController
  def create
    debugger
    user = User.find(params[:channel_user][:user_id]);
    @channel = Channel.find(params[:channel_user][:channel_id])
    
    ChannelUser.create(user: user, channel: channel)

    render 'api/channels/show'
  end

  def destroy

  end

  private
  def channel_user_params
    params.permit(:channel_user).require(:user_id, :channel_id)
  end
end
