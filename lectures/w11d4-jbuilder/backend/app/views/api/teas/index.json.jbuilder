@teas.each do |tea|
  json.set! tea.id do
    json.partial! 'tea', tea: tea
  end
end