# We need to package the tea info as 
# well as any transactions associated with that tea

json.tea do
  json.extract! @tea, :id, :flavor, :amount, :description, :transaction_ids, :buyer_ids
end

json.transactions do
  @tea.transactions.each do |transaction|
    json.set! transaction.id do
      json.extract! transaction, :id, :quantity, :tea_id, :user_id
    end
  end
end

json.users do
  @tea.buyers.each do |user|
    json.set! user.id do
      json.extract! user, :id, :username
    end
  end 
end