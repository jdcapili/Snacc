class DmChatChannel < ApplicationCable::Channel
  def subscribed
    
    @dm_chat_channel = DmGroup.find(params[:id])
    # stream_from "some_channel"
    stream_for @dm_chat_channel
  end

  def speakDM(data)
    
    message = Message.new(body: data['message'])
    message.messageable_type = 'DmGroup'
    message.messageable_id = data['channel_id'] 
    message.author_id = data['author_id']
    if message.save
      
      author = User.includes(:messages,:subscribed_channels, :dm_groups, :owned_channels, :owned_groups).find(data['author_id'])
      dm_group_data = DmGroup.includes(:messages, :members).find(data['channel_id'])
      dm_group = {dm_group: {id: dm_group_data.id,
      creator_id: dm_group_data.creator_id, 
      message_ids: dm_group_data.message_ids, 
      member_ids: dm_group_data.member_ids}}
      author = {author: {id: author.id, display_name: author.display_name, email: author.email, 
      subscribed_channel_ids: author.subscribed_channel_ids, owned_channel_ids: author.owned_channel_ids,
      dm_group_ids: author.dm_group_ids, owned_group_ids: author.owned_group_ids,
      message_ids: author.message_ids}}
 
      datum = {message: message.attributes}.merge(author)
      datum = datum.merge(dm_group)
      
      socket = {datum: datum,type: 'messageDM'}
        DmChatChannel.broadcast_to(@dm_chat_channel, socket)
    end
  end

  def updateDM(data)
    
    message = Message.includes(:author).find(data['message']['id'])
    dm_group_data = DmGroup.includes(:messages, :members).find(message.messageable_id)
    dm_group = {dm_group: {id: dm_group_data.id,
      creator_id: dm_group_data.creator_id, 
      message_ids: dm_group_data.message_ids, 
      member_ids: dm_group_data.member_ids}}
    author = message.author
    if message.update({body: data['message']['body']})
      author = {author: {author_id: author.id, author_name: author.display_name}}
      datum = {message: message.attributes}.merge(author)
      datum = datum.merge(dm_group)
      socket = {datum: datum,type: 'messageDM'}
      DmChatChannel.broadcast_to(@dm_chat_channel, socket)
    end
  end

  def deleteDM(data)
    
    message = Message.find(data['message']['id'])
    if data['message']['currentUserId'] == message.author_id
      message.destroy!
      datum = {message: message.attributes}
      socket = {datum: datum, type: 'deleteDM'}
      DmChatChannel.broadcast_to(@dm_chat_channel, socket)
    end
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
