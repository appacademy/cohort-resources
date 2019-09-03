# json.array! @todos do |todo|
#     json.extract! todo, :id, :title, :body, :done
# end

@todos.each do |todo|
    json.set! todo.id do
        json.partial! 'todo', todo: todo
    end
end