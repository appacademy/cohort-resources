class Pokemon < ApplicationRecord
  TYPES = [
    'fire',
    'electric',
    'normal',
    'ghost',
    'psychic',
    'water',
    'bug',
    'dragon',
    'grass',
    'fighting',
    'ice',
    'flying',
    'poison',
    'ground',
    'rock',
    'steel'
  ].sort.freeze

  validates :attack, :defense, :image_url, :name, :poke_type, presence: true
  validates :name, uniqueness: true
  validates :attack, :defense, numericality: true
  validates :poke_type, inclusion: { in: TYPES }

  has_many :items
end
