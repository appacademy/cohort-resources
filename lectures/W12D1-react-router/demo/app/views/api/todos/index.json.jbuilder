@todos.each do |todo|
  json.todos do
    json.set! todo.id do
      json.partial! 'api/todos/todo', todo: todo
    end
  end
end

# { 
#   todos: {
#     4: {
#       title: 'something',
#       id: 4,
#       done: false,
#       user_id: 7,
#       body: 'some body',
#       tags: ['tag1', 'tag2', 'tag3']
#     }
#   }
# }
