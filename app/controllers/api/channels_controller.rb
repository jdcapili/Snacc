class Api::ChannelsController < ApplicationController

  def index
    @channels = Channel.all #includes(:subscriber_ids)??
    render 'api/channels/index'
  end

  def show
    @channel = Channel.find(params[:id]).includes(:message_ids) #.includes(:subscriber_ids)
    
    render 'api/channels/show'
  end

  def create
    
    @channel = Channel.new(channel_params);
    @channel.creator_id = current_user.id
    # debugger

    if @channel.save
      ChannelUser.create(user_id: current_user.id, channel_id: @channel.id)
      # debugger
      render 'api/channels/show'
    else
      
      render json: @channel.errors.full_messages, status: 422
    end
  end

  def destroy
    @channel = Channel.find(params[:id])
    @channel.destroy
    render json: @channel.id
  end

  private
  def channel_params
    params.require(:channel).permit(:channel_name)
  end
end
