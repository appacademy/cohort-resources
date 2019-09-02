# METHOD 1: Static Setting of Keys
# json.id @todo.id
# json.title @todo.title
# json.body @todo.body
# json.done @todo.done

# METHOD 2: Dynamic Setting of Keys
# json.set! :id, @todo.id
# json.set! :title, @todo.title
# json.set! :body, @todo.body
# json.set! :done, @todo.done

# METHOD 3: EXTRACT (maybe use this one)
# json.extract! @todo, :id, :title, :body, :done

# METHOD 4: PARTIAL
json.todo do 
    json.set! @todo.id do
        json.partial! 'todo', todo: @todo
    end
end

json.tags do 
    # render tags info
    @todo.tags.each do |tag|
        json.partial! 'api/tags/tag', tag: tag
    end
end

json.taggings do # joins table that connects tags to todos
    #render taggings info
    @todo.taggings.each do |tagging|
        json.partial! 'api/taggings/tagging', tagging: tagging
    end
end


