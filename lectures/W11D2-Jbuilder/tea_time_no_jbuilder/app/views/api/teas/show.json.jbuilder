# json.key do 
#     json.key 'value'
# end

# {
#   "key": {
#      "key": "value"
#    }
# }

json.tea do 
    json.extract! @tea, :id, :flavor, :amount, :description, :transaction_ids 
end

json.transactions do 
    @tea.transactions.each do |transaction|
        json.set! transaction.id do 
            json.extract! transaction, :id, :quantity, :created_at, :tea_id
            # we create this key     this is our value
            json.customer            transaction.user.username
        end
    end
end