# json.array! @todos, :id, :title, :body
json.todos do
    @todos.each do |todo|
        # json.set! todo.id do
        #     json.extract! todo, :id, :title, :body
        # end
        json.partial! 'todo', todo: todo
    end
end

json.steps do 
    @todos.each do |todo|
        todo.steps.each do |step|
            json.set! step.id do
                json.extract! step, :id, :title, :done, :todo_id
            end
        end
    end
end

json.users do 
    json.set! @todos[0].user.id do
        json.extract! @todos[0].user, :id, :username
    end
end
