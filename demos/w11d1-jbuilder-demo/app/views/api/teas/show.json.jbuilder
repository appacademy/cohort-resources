json.tea do
    json.extract! @tea, :id, :flavor, :amount, :description, :transaction_ids
    # json.transaction_ids @tea.transactions.map{ |t| t.id }
end

json.transactions do
    @tea.transactions.each do |transaction|
        json.set! transaction.id do
            json.extract! transaction, :id, :quantity, :tea_id
            json.customer transaction.user.username
        end
    end
end