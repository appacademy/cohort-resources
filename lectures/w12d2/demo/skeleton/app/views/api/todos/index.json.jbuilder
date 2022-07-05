@todos.each do |todo|
  json.todos do
    json.set! todo.id do
      json.partial! 'api/todos/todo', todo: todo
    end
  end
end
