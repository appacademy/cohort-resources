# format a single todo obj w jbuilder

json.set! todo.id do 
    json.extract! todo , :id, :title, :body, :done, :user_id
    # json.tags todo.tags
end