ActiveRecord::Base.transaction do
  Tea.destroy_all
  flavors = ['green','chai','english breakfast', 'earl gray', 'lavender','peppermint']
  amounts = (4.0..6.0)
  flavors.each do |flavor|
    Tea.create!(flavor: flavor, amount: rand(amounts).round(2) )
  end
end