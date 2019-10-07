class Api::MessagesController < ApplicationController

  before_action :ensure_logged_in

  def index #tested
    
    channel = Channel.find(params[:id])
    @messages = Message.where(messageable: channel)
    render 'api/messages/index'
  end

  def show #tested
    @message = Message.find(params[:id])
    render 'api/messages/show'
  end

  def update #tested but still needs errors
    
    @message = Message.find(params[:id])
    if current_user.id == @message.author_id && @message.update(message_params)
      render 'api/messages/show'
    end
  end

  def destroy #tested
    @message = Message.find(params[:id])
    if current_user.id == @message.author_id
      @message.destroy!
      render json: @message.id
    #   if(@message.messageable_type == 'Channel')
    #     channel = Channel.find(message.messageable_id)
    #     @messages = Message.where(messageable: channel)
    #   end
    
    # render 'api/messages/index'
    end
  end

  private
  def message_params
    params.require(:message).permit(:body)
  end
end
