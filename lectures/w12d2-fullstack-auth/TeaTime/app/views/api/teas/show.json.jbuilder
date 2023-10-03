json.tea do
    json.extract! @tea, :price, :description, :id, :flavor
end

json.transactions do
    @tea.transactions.each do |transaction|
        json.set! transaction.id do
            json.extract! transaction, :user_id, :tea_id, :quantity
        end
    end
end

likes = @tea.likes.includes(:user)

json.likes do 
    likes.each do |like|
        json.set! like.id do
            json.extract! like, :user_id, :tea_id
            json.username like.user.username
        end
    end
end