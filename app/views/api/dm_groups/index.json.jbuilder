
json.array! (@dm_groups) do |dm_group|
  json.partial! "api/dm_groups/dm_group", dm_group: dm_group
end