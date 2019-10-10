json.dm_group do
  json.partial! "api/dm_groups/dm_group", dm_group: @dm_group
end
json.messages do
  json.array! (@dm_group.messages) do |message|
    json.partial! "api/messages/message", message: message
  end
end