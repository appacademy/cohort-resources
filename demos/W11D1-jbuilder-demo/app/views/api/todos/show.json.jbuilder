# json.extract! @todo, :id, :title, :body

# json.set!(@todo.id, @todo)

# json.set! @todo.id do 
#     json.extract! @todo, :id, :title, :body
# end 

json.partial! 'todo', todo: @todo