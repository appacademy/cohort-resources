@transactions.each do |transaction|
  json.set! transaction.id do
    json.extract! transaction, :id, :user_id, :tea_id, :quantity
    json.username transaction.user.username
  end
end