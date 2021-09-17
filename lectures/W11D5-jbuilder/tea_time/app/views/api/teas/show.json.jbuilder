json.tea do 
    json.extract! @tea, :id, :flavor, :amount, :description, :transaction_ids
end

json.transactions do 
   @tea.transactions.each do |transaction|
     json.set! transaction.id do 
         json.extract! transaction, :id, :quantity, :created_at, :tea_id
         json.customer transaction.user.username
     end
   end
end