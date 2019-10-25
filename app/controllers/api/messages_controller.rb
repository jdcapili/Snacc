class Api::MessagesController < ApplicationController

  before_action :ensure_logged_in

  def index #tested
    if params[:type] == "channel"
     
      messageable = Channel.find(params[:id])
    elsif params[:type] == "dm_group"
      messageable = DmGroup.find(params[:id])
    end
    @messages = Message.where(messageable: messageable).includes(:author)
    render 'api/messages/index'
  end

  def show #tested
    @message = Message.includes(:author).find(params[:id])
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
    end
  end

  private
  def message_params
    params.require(:message).permit(:body)
  end
end
