class Api::ChannelsController < ApplicationController

  def index
    @channels = Channel.all
    render 'api/channels/index'
  end

  def show
    @channel = Channel.find(params[:id])
    
    render 'api/channels/show'
  end

  def create
    debugger
    @channel = Channel.new(channel_params);
    @channel.creator_id = current_user.id
    debugger

    if @channel.save
      debugger
      render 'api/channels/show'
    else
      debugger
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
