class Api::MessagesController < ApplicationController
  def index
    debugger
    @messages = Message.where(messageable_type: 'Channel', messageable_id: params[:id])
    render 'api/messages/index'
  end

  def show
    @message = Message.find(params[:id])
    render 'api/messages/show'
  end

  # def destroy
  #   @message = Message.find(params[:id])
  #   @message.destroy!
  #   render json: @message
  # end
end
