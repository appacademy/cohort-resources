# statis way
# json.id @todo.id
# json.title @todo.title
# json.body @todo.body
# json.done @todo.done

# dynamic way using jbuilder `.set!` method
# json.set! "banana".length, @todo.id
# json.set! :title, @todo.title
# json.set! :body, @todo.body
# json.set! :done, @todo.done

# using `.extract!`
# json.extract! @todo , :id, :title, :body, :done, :user_id
# json.banana @todo.tags

# arg 1 is the path to the partial, arg two is data being passed along
json.partial! "api/todos/todo" , todo: @todo