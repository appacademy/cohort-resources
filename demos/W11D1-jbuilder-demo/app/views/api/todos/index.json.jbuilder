# json.array! @todos, :id, :title, :body

# @todos.each do |todo|
#     # json.set! todo.id do 
#     #     json.extract! todo, :id, :title, :body
#     # end 

#     json.partial! 'todo', todo: todo
# end 

json.todos do 
    @todos.each do |todo|
        json.partial! 'todo', todo: todo
    end
end 

json.users do 
    json.set! @todos.first.user.id do 
        # todos => todo_ids => todoIds: [1,2,3,4,5]
        json.extract! @todos[0].user, :id, :username, :todo_ids
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