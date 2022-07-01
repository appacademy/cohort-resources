
@teas.each do |tea|
  json.set! tea.id do
    # 1
    #json.extract! tea, :id, :flavor, :amount
    # 2
    #json.id tea.id
    #json.flavor tea.flavor
    #json.amount tea.amount
    # 3
    json.partial! 'tea', tea: tea
  end  
end


