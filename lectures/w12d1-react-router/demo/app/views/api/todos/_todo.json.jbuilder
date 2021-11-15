json.extract! todo, :id, :title, :body, :user_id, :done
json.tags todo.tags.pluck(:name)