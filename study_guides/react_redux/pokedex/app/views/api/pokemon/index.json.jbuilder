@pokemon.each do |poke|
  json.set! poke.id do
    json.extract! poke, :id, :name
    json.image_url image_path(poke.image_url)
    json.moves []
    json.item_ids []
  end
end
