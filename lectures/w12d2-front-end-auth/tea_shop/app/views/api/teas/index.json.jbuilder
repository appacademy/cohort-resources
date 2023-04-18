# this is ruby code

@teas.each do |tea|
    json.set! tea.id do
      
      json.extract! tea, :id, :flavor, :price
    
    end
  end
  
  # {
  #   1: {id: 1, flavor: "green", price: 3.0}
  #   3: {id: 3, flavor: "black", price: 3.0}
  # }