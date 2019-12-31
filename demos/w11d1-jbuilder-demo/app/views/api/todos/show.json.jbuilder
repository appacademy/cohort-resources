# json.set! @todo.id do
#     json.extract! @todo, :id, :title, :body
# end
# json.set! @todo.id, @todo

json.partial! 'todo', todo: @todo