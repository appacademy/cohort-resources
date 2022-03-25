# retuns {

    # tea: { 
    #   id: 1, 
    #   flavor: 'Green',
    # }

json.tea do 
    debugger
    json.extract! @tea, :id, :flavor, :amount, :description, :transaction_ids
end

# transactions: {
#  1: {
      # id: 1
      # quantity: 32,
      # ...
# }
# }

json.transactions do 
  debugger
   @tea.transactions.each do |transaction|
     json.set! transaction.id do 
         json.extract! transaction, :id, :quantity, :created_at, :tea_id
         json.customer transaction.user.username
     end
   end
end

json.likes do 
  debugger
  @tea.likes.each do |like| 
    json.set! like.id do 
      json.id like.id
      json.tea_id like.tea_id
      json.user_id like.user_id
    end
  end
end

# }