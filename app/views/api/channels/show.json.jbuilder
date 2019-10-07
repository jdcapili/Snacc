json.channel do
  json.partial! "api/channels/channel", channel: @channel
end
json.messages do
  # debugger
  json.array! (@channel.messages) do |message|
    json.partial! "api/messages/message", message: message
  end
end