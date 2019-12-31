
json.set! todo.id do
    json.extract! todo, :id, :title, :body, :user_id, :step_ids
    # json.user do
    #     json.extract! banana.user, :id, :username
    # end

        # bad thought process! DON'T DO THIS
    # json.username do
    #     json.extract! todo.user, :username
    # end

    # json.steps do
    #     todo.steps.each do |step|
    #         json.set! step.id do
    #             json.extract! step, :title, :done
    #         end
    #     end
    # end

    # ----------------------------------- sweet thought process

end
