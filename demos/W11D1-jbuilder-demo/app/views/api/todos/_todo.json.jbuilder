json.set! todo.id do 
    json.extract! todo, :id, :title, :body, :user_id
    # json.username do
    #     json.extract! todo.user, :id, :username
    # end 
    # json.steps do 
    #     todo.steps.each do |step|
    #         json.set! step.id do
    #             json.extract! step, :id, :title, :done
    #         end
    #     end
    # end 
end 