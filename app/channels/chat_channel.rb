class ChatChannel < ApplicationCable::Channel
  def subscribed
    debugger
    @chat_channel = Channel.find(params[:id])
    # stream_from "some_channel"
    stream_from @chat_channel
  end

  def speak(data)
    debugger
    message = Message.new(body: data['message'])
    message.messageable_type = 'Channel'
    message.messageable_id = data['channel_id'] 
    message.author_id = data['author_id'] # I might need the currentUserId

    if message.save
      debugger
      socket = {message: message.body,type: 'message'}
      ChatChannel.broadcast_to(@chat_channel, socket)
    end
  end

  def load
    debugger
    messages = Message.all.collect(&:body)
    socket = { messages: messages, type: 'messages' }
    ChatChannel.broadcast_to(@chat_channel, socket)
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
