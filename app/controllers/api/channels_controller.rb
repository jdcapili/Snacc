class Api::ChannelsController < ApplicationController

  before_action :ensure_logged_in

  def index
    #current user's subscribed channels

    @channels = Channel.includes(:messages).all #includes(:subscriber_ids)??
    render 'api/channels/index'
  end

  def show
    @channel = Channel.includes(:messages, :subscribers).find(params[:id]) #.includes(:subscriber_ids)
    
    render 'api/channels/show'
  end

  def create
    
    @channel = Channel.new(channel_params);
    @channel.creator_id = current_user.id
    

    if @channel.save
      @channel.subscribers << User.where(:id => params[:channel][:user_ids])
      
      
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
