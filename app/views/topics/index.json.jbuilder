json.array!(@topics) do |topic|
  json.extract! topic, :id, :name, :message
  json.url topic_url(topic, format: :json)
end
