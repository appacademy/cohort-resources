json.tea do
    # json.banana "banana mocha"
    json.extract! @tea, :id, :flavor, :amount, :description, :transaction_ids #transaction_ids is a method created from our association
end
json.transactions do
    # json.ice_cream "strawberry"
    @tea.transactions.each do |transaction| # we are using the Tea#transactions association
        json.set! transaction.id do #.set! means evaluate the code after it and make it a key
            json.extract! transaction, :id, :quantity, :created_at, :user_id
        end
        # a do-end block is like opening up curly braces in JavaScript
    end
end