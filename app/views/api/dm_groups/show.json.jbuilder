json.dm_group do
  json.partial! "api/dm_groups/dm_group", dm_group: @dm_group
end
json.messages do
  json.array! (@dm_group.messages) do |message|
    json.partial! "api/messages/message", message: message
  end
end

json.members do
  json.array!(@dm_group.members) do |member|
    json.partial! "api/users/user", user: member
  end
end