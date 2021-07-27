json.tea do
    json.extract! @tea, :id, :flavor, :amount, :description, :transaction_ids
    #transaction_ids => rails magic that fetches array of all values of transactions belonging to @tea
end

json.transactions do
    @tea.transactions.each do |transaction|
        json.set! transaction.id do
            json.extract! transaction, :id, :quantity, :created_at, :tea_id
            json.customer transaction.user.username #creates a key customer, value as transaction.user.username
        end
    end
end