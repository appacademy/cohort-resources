@shirts.each do |shirt|
    json.set! shirt.id do
        json.extract! shirt, :id, :price, :color, :style
        json.image_url asset_path(shirt.image_url)
    end
end