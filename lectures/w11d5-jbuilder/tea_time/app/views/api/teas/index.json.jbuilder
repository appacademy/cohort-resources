# @teas == [{id:.., flavor:...,amount:...},{},...] <- what i have

# {1: {id:1, amount...}} <- what I want

@teas.each do |tea|
  json.set! tea.id do
    # json.extract! tea, :id, :flavor, :amount
    # json.id tea.id
    # json.flavor tea.flavor
    # json.amount tea.amount
    json.partial! 'tea', tea: tea
  end
end
