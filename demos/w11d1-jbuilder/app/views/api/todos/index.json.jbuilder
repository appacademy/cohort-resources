# .array! turns into array
# json.array! @todos do |todo|
#     json.extract! todo, :id, :title, :body, :done, :user_id
#     json.tags todo.tags
# end

json.todos do 
    @todos.each do |todo|
        json.partial! "api/todos/todo" , todo: todo
    end
end

json.taggings do 
    @todos.each do |todo|
        todo.taggings.each do |tagging|
            json.partial! "api/taggings/tagging", tagging: tagging
        end
    end
end

json.tags do 
    @todos.each do |todo|
        todo.tags.each do |tag|
            json.partial! "api/tags/tag", tag: tag
        end
    end
end
    