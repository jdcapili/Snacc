
json.extract! message, :id, :body, :created_at, :updated_at
json.author do
  json.author_id message.author_id
  json.author_name message.author.display_name
end
