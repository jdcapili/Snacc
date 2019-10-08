class ChatChannel < ApplicationCable::Channel
  def subscribed
    
    @chat_channel = Channel.find(params[:id])
    # stream_from "some_channel"
    stream_for @chat_channel
  end

  def speak(data)
    
    message = Message.new(body: data['message'])
    message.messageable_type = 'Channel'
    message.messageable_id = data['channel_id'] 
    message.author_id = data['author_id'] # I might need the currentUserId

    if message.save
      # message = message.includes(:author)
      # debugger
      socket = {message: message,type: 'message'}
      ChatChannel.broadcast_to(@chat_channel, socket)
    end
  end

  def load
    
    messages = Message.all.collect(&:body)
    socket = { messages: messages, type: 'messages' }
    ChatChannel.broadcast_to(@chat_channel, socket)
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
