class DmChatChannel < ApplicationCable::Channel
  def subscribed
    
    @dm_chat_channel = DmGroup.find(params[:id])
    # stream_from "some_channel"
    stream_for @dm_chat_channel
  end

  def speak(data)
    
    message = Message.new(body: data['message'])
    message.messageable_type = 'DmGroup'
    message.messageable_id = data['channel_id'] 
    author = User.find(data['author_id']) # I might need the currentUserId
    message.author = author
    if message.save
      
      dm_group_data = DmGroup.includes(:messages, :members).find(data['channel_id'])
      dm_group = {dm_group: {id: dm_group_data.id,
      creator_id: dm_group_data.creator_id, 
      message_ids: dm_group_data.message_ids, 
      member_ids: dm_group_data.member_ids}}
      author = {author: {author_id: author.id, author_name: author.display_name}}
 
      datum = {message: message.attributes}.merge(author)
      datum = datum.merge(dm_group)
      socket = {datum: datum,type: 'message'}
        DmChatChannel.broadcast_to(@dm_chat_channel, socket)
    end
  end

  def update(data)

    message = Message.includes(:author).find(data['message']['id'])
    dm_group_data = DmGroup.includes(:messages, :subscribers).find(message.messageable_id)
    dm_group = {dm_group: {id: dm_group_data.id, dm_group_name: dm_group_data.dm_group_name,
      creator_id: dm_group_data.creator_id, message_ids: dm_group_data.message_ids, subscriber_ids: dm_group_data.subscriber_ids}}
    author = message.author
    if message.update({body: data['message']['body']})
      author = {author: {author_id: author.id, author_name: author.display_name}}
      datum = message.attributes.merge(author)
      datum = datum.merge(dm_group)
      socket = {message: datum,type: 'message'}
      DmChatChannel.broadcast_to(@dm_chat_channel, socket)
    end
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
