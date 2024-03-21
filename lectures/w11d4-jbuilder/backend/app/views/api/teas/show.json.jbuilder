json.tea do
  json.partial! 'tea', tea: @tea
  json.purchaserIds @tea.purchaser_ids
end

json.transactions do
  @tea.transactions.each do |transaction|
    json.set! transaction.id do
      json.extract! transaction, :id, :tea_id, :created_at
      json.user_email transaction.user.email
    end
  end
end