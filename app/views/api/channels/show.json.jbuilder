json.channel do
  json.partial! "api/channels/channel", channel: @channel
end
json.messages do
  json.array! (@channel.messages) do |message|
    json.partial! "api/messages/message", message: message
  end
end

json.subscribers do
  json.array!(@channel.subscribers) do |subscriber|
    json.partial! "api/users/user", user: subscriber
  end
end
