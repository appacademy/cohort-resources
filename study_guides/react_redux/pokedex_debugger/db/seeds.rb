# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

def create_random_item!(pokemon)
  Item.create!(
    pokemon_id: pokemon.id,
    name: Faker::Commerce.product_name,
    price: (1..100).to_a.sample,
    happiness: (1..100).to_a.sample,
    image_url: %w(
      /assets/pokemon_berry.svg
      /assets/pokemon_egg.svg
      /assets/pokemon_potion.svg
      /assets/pokemon_super_potion.svg
    ).sample
  )
end

ActiveRecord::Base.transaction do
  Pokemon.destroy_all

  pokemon = {
    '1' => {
      'name' => 'Bulbasaur',
      'attack' => 49,
      'defense' => 49,
      'poke_type' => 'grass',
      'moves' => [
         'tackle',
         'vine whip'
      ],
    },
    '2' => {
      'name' => 'Ivysaur',
      'attack' => 62,
      'defense' => 63,
      'poke_type' => 'grass',
      'moves' => [
         'tackle',
         'vine whip',
         'razor leaf'
      ],
    },
    '3' => {
      'name' => 'Venusaur',
      'attack' => 82,
      'defense' => 83,
      'poke_type' => 'grass',
      'moves' => [
         'tackle',
         'vine whip',
         'razor leaf'
      ],
    },
    '4' => {
      'name' => 'Charmander',
      'attack' => 52,
      'defense' => 43,
      'poke_type' => 'fire',
      'moves' => [
         'scratch',
         'ember',
         'metal claw'
      ],
    },
    '5' => {
      'name' => 'Charmeleon',
      'attack' => 64,
      'defense' => 58,
      'poke_type' => 'fire',
      'moves' => [
         'scratch',
         'ember',
         'metal claw',
         'flamethrower'
      ],
    },
    '6' => {
      'name' => 'Charizard',
      'attack' => 84,
      'defense' => 78,
      'poke_type' => 'fire',
      'moves' => [
         'flamethrower',
         'wing attack',
         'slash',
         'metal claw'
      ],
    },
    '7' => {
      'name' => 'Squirtle',
      'attack' => 48,
      'defense' => 65,
      'poke_type' => 'water',
      'moves' => [
         'tackle',
         'bubble',
         'water gun'
      ],
    },
    '8' => {
      'name' => 'Wartortle',
      'attack' => 63,
      'defense' => 80,
      'poke_type' => 'water',
      'moves' => [
         'tackle',
         'bubble',
         'water gun',
         'bite'
      ],
    },
    '9' => {
      'name' => 'Blastoise',
      'attack' => 83,
      'defense' => 100,
      'poke_type' => 'water',
      'moves' => [
         'hydro pump',
         'bubble',
         'water gun',
         'bite'
      ],
    },
    '10' => {
      'name' => 'Caterpie',
      'attack' => 30,
      'defense' => 35,
      'poke_type' => 'bug',
      'moves' => [
         'tackle'
      ],
    },
    '12' => {
      'name' => 'Butterfree',
      'attack' => 45,
      'defense' => 50,
      'poke_type' => 'bug',
      'moves' => [
         'confusion',
         'gust',
         'psybeam',
         'silver wind'
      ],
    },
    '13' => {
      'name' => 'Weedle',
      'attack' => 35,
      'defense' => 30,
      'poke_type' => 'bug',
      'moves' => [
         'poison sting'
      ],
    },
    '16' => {
      'name' => 'Pidgey',
      'attack' => 45,
      'defense' => 40,
      'poke_type' => 'normal',
      'moves' => [
         'tackle',
         'gust'
      ],
    },
    '17' => {
      'name' => 'Pidgeotto',
      'attack' => 60,
      'defense' => 55,
      'poke_type' => 'normal',
      'moves' => [
         'tackle',
         'gust',
         'wing attack'
      ],
    },
    '18' => {
      'name' => 'Pidgeot',
      'attack' => 80,
      'defense' => 75,
      'poke_type' => 'normal',
      'moves' => [
         'tackle',
         'gust',
         'wing attack'
      ],
    },
    '19' => {
      'name' => 'Rattata',
      'attack' => 56,
      'defense' => 35,
      'poke_type' => 'normal',
      'moves' => [
         'tackle',
         'hyper fang'
      ],
    },
    '20' => {
      'name' => 'Raticate',
      'attack' => 81,
      'defense' => 60,
      'poke_type' => 'normal',
      'moves' => [
         'tackle',
         'hyper fang'
      ],
    },
    '21' => {
      'name' => 'Spearow',
      'attack' => 60,
      'defense' => 30,
      'poke_type' => 'normal',
      'moves' => [
         'peck'
      ],
    },
    '22' => {
      'name' => 'Fearow',
      'attack' => 90,
      'defense' => 65,
      'poke_type' => 'normal',
      'moves' => [
         'peck',
         'drill peck'
      ],
    },
    '23' => {
      'name' => 'Ekans',
      'attack' => 60,
      'defense' => 44,
      'poke_type' => 'poison',
      'moves' => [
         'poison sting',
         'bite'
      ],
    },
    '24' => {
      'name' => 'Arbok',
      'attack' => 85,
      'defense' => 69,
      'poke_type' => 'poison',
      'moves' => [
         'poison sting',
         'bite',
         'acid'
      ],
    },
    '25' => {
      'name' => 'Pikachu',
      'attack' => 55,
      'defense' => 40,
      'poke_type' => 'electric',
      'moves' => [
        'growl',
        'electro ball',
        'feint'
      ]
    },
    '26' => {
      'name' => 'Raichu',
      'attack' => 90,
      'defense' => 55,
      'poke_type' => 'electric',
      'moves' => [
         'thundershock',
         'thunderbolt'
      ],
    },
    '27' => {
      'name' => 'Sandshrew',
      'attack' => 75,
      'defense' => 85,
      'poke_type' => 'ground',
      'moves' => [
         'scratch',
         'poison sting'
      ],
    },
    '28' => {
      'name' => 'Sandslash',
      'attack' => 100,
      'defense' => 110,
      'poke_type' => 'ground',
      'moves' => [
         'scratch',
         'poison sting',
         'slash',
         'swift'
      ],
    },
    '29' => {
      'name' => 'Nidorana',
      'attack' => 47,
      'defense' => 52,
      'poke_type' => 'poison',
      'moves' => [
         'scratch'
      ],
    },
    '31' => {
      'name' => 'Nidoqueen',
      'attack' => 82,
      'defense' => 87,
      'poke_type' => 'poison',
      'moves' => [
         'scratch',
         'poison sting',
         'body slam',
         'superpower'
      ],
    },
    '32' => {
      'name' => 'Nidoran',
      'attack' => 57,
      'defense' => 40,
      'poke_type' => 'poison',
      'moves' => [
         'peck'
      ],
    },
    '34' => {
      'name' => 'Nidoking',
      'attack' => 92,
      'defense' => 77,
      'poke_type' => 'poison',
      'moves' => [
         'peck',
         'poison sting',
         'megahorn'
      ],
    },
    '38' => {
      'name' => 'Ninetales',
      'attack' => 76,
      'defense' => 75,
      'poke_type' => 'fire',
      'moves' => [
         'ember'
      ],
    },
    '41' => {
      'name' => 'Zubat',
      'attack' => 45,
      'defense' => 35,
      'poke_type' => 'poison',
      'moves' => [
         'astonish',
         'bite',
         'wing attack'
      ],
    },
    '42' => {
      'name' => 'Golbat',
      'attack' => 80,
      'defense' => 70,
      'poke_type' => 'poison',
      'moves' => [
         'poison fang',
         'bite',
         'wing attack',
         'air cutter'
      ],
    },
    '46' => {
      'name' => 'Paras',
      'attack' => 70,
      'defense' => 55,
      'poke_type' => 'bug',
      'moves' => [
         'scratch'
      ],
    },
    '47' => {
      'name' => 'Parasect',
      'attack' => 95,
      'defense' => 80,
      'poke_type' => 'bug',
      'moves' => [
         'scratch',
         'slash'
      ],
    },
    '48' => {
      'name' => 'Venonat',
      'attack' => 55,
      'defense' => 50,
      'poke_type' => 'bug',
      'moves' => [
         'tackle',
         'confusion'
      ],
    },
    '49' => {
      'name' => 'Venomoth',
      'attack' => 65,
      'defense' => 60,
      'poke_type' => 'bug',
      'moves' => [
         'psybeam',
         'psychic',
         'confusion',
         'gust'
      ],
    },
    '50' => {
      'name' => 'Diglett',
      'attack' => 55,
      'defense' => 25,
      'poke_type' => 'ground',
      'moves' => [
         'scratch'
      ],
    },
    '51' => {
      'name' => 'Dugtrio',
      'attack' => 80,
      'defense' => 50,
      'poke_type' => 'ground',
      'moves' => [
         'scratch',
         'slash',
         'earthquake'
      ],
    },
    '52' => {
      'name' => 'Meowth',
      'attack' => 45,
      'defense' => 35,
      'poke_type' => 'normal',
      'moves' => [
         'scratch',
         'bite'
      ],
    },
    '53' => {
      'name' => 'Persian',
      'attack' => 70,
      'defense' => 60,
      'poke_type' => 'normal',
      'moves' => [
         'scratch',
         'bite',
         'slash'
      ],
    },
    '54' => {
      'name' => 'Psyduck',
      'attack' => 52,
      'defense' => 48,
      'poke_type' => 'water',
      'moves' => [
         'scratch',
         'confusion'
      ],
    },
    '55' => {
      'name' => 'Golduck',
      'attack' => 82,
      'defense' => 78,
      'poke_type' => 'water',
      'moves' => [
         'scratch',
         'confusion',
         'hydro pump'
      ],
    },
    '56' => {
      'name' => 'Mankey',
      'attack' => 80,
      'defense' => 35,
      'poke_type' => 'fighting',
      'moves' => [
         'scratch',
         'low kick',
         'karate chop'
      ],
    },
    '57' => {
      'name' => 'Primeape',
      'attack' => 105,
      'defense' => 60,
      'poke_type' => 'fighting',
      'moves' => [
         'scratch',
         'low kick',
         'karate chop',
         'cross chop'
      ],
    },
    '59' => {
      'name' => 'Arcanine',
      'attack' => 110,
      'defense' => 80,
      'poke_type' => 'fire',
      'moves' => [
         'bite',
         'ember'
      ],
    },
    '60' => {
      'name' => 'Poliwag',
      'attack' => 50,
      'defense' => 40,
      'poke_type' => 'water',
      'moves' => [
         'bubble',
         'water gun'
      ],
    },
    '62' => {
      'name' => 'Poliwrath',
      'attack' => 85,
      'defense' => 95,
      'poke_type' => 'water',
      'moves' => [
         'water gun'
      ],
    },
    '65' => {
      'name' => 'Alakazam',
      'attack' => 50,
      'defense' => 45,
      'poke_type' => 'psychic',
      'moves' => [
         'confusion',
         'psybeam',
         'psychic'
      ],
    },
    '66' => {
      'name' => 'Machop',
      'attack' => 80,
      'defense' => 50,
      'poke_type' => 'fighting',
      'moves' => [
         'low kick',
         'karate chop'
      ],
    },
    '68' => {
      'name' => 'Machamp',
      'attack' => 130,
      'defense' => 80,
      'poke_type' => 'fighting',
      'moves' => [
         'low kick',
         'karate chop',
         'cross chop',
         'dynamicpunch'
      ],
    },
    '69' => {
      'name' => 'Bellsprout',
      'attack' => 75,
      'defense' => 35,
      'poke_type' => 'grass',
      'moves' => [
         'vine whip'
      ],
    },
    '71' => {
      'name' => 'Victreebel',
      'attack' => 105,
      'defense' => 65,
      'poke_type' => 'grass',
      'moves' => [
         'vine whip',
         'razor leaf'
      ],
    },
    '72' => {
      'name' => 'Tentacool',
      'attack' => 40,
      'defense' => 35,
      'poke_type' => 'water',
      'moves' => [
         'poison sting',
         'constrict',
         'acid',
         'bubblebeam'
      ],
    },
    '73' => {
      'name' => 'Tentacruel',
      'attack' => 70,
      'defense' => 65,
      'poke_type' => 'water',
      'moves' => [
         'hydro pump',
         'constrict',
         'acid',
         'bubblebeam'
      ],
    },
    '74' => {
      'name' => 'Geodude',
      'attack' => 80,
      'defense' => 100,
      'poke_type' => 'rock',
      'moves' => [
         'tackle',
         'rock throw'
      ],
    },
    '76' => {
      'name' => 'Golem',
      'attack' => 110,
      'defense' => 130,
      'poke_type' => 'rock',
      'moves' => [
         'tackle',
         'rock throw',
         'earthquake'
      ],
    },
    '77' => {
      'name' => 'Ponyta',
      'attack' => 85,
      'defense' => 55,
      'poke_type' => 'fire',
      'moves' => [
         'ember',
         'stomp'
      ],
    },
    '78' => {
      'name' => 'Rapidash',
      'attack' => 100,
      'defense' => 70,
      'poke_type' => 'fire',
      'moves' => [
         'ember',
         'stomp',
         'fire blast'
      ],
    },
    '79' => {
      'name' => 'Slowpoke',
      'attack' => 65,
      'defense' => 65,
      'poke_type' => 'water',
      'moves' => [
         'tackle',
         'water gun',
         'confusion',
         'headbutt'
      ],
    },
    '80' => {
      'name' => 'Slowbro',
      'attack' => 75,
      'defense' => 110,
      'poke_type' => 'water',
      'moves' => [
         'psychic',
         'water gun',
         'confusion',
         'headbutt'
      ],
    },
    '81' => {
      'name' => 'Magnemite',
      'attack' => 35,
      'defense' => 70,
      'poke_type' => 'electric',
      'moves' => [
         'tackle',
         'thundershock',
         'spark'
      ],
    },
    '82' => {
      'name' => 'Magneton',
      'attack' => 60,
      'defense' => 95,
      'poke_type' => 'electric',
      'moves' => [
         'tackle',
         'thundershock',
         'spark',
         'zap cannon'
      ],
    },
    '83' => {
      'name' => 'Farfetch\'d',
      'attack' => 65,
      'defense' => 55,
      'poke_type' => 'normal',
      'moves' => [
         'peck',
         'slash'
      ],
    },
    '84' => {
      'name' => 'Doduo',
      'attack' => 85,
      'defense' => 45,
      'poke_type' => 'normal',
      'moves' => [
         'peck'
      ],
    },
    '85' => {
      'name' => 'Dodrio',
      'attack' => 110,
      'defense' => 70,
      'poke_type' => 'normal',
      'moves' => [
         'peck',
         'drill peck'
      ],
    },
    '86' => {
      'name' => 'Seel',
      'attack' => 45,
      'defense' => 55,
      'poke_type' => 'water',
      'moves' => [
         'headbutt',
         'icy wind',
         'aurora beam'
      ],
    },
    '87' => {
      'name' => 'Dewgong',
      'attack' => 70,
      'defense' => 80,
      'poke_type' => 'water',
      'moves' => [
         'ice beam',
         'headbutt',
         'icy wind',
         'aurora beam'
      ],
    },
    '88' => {
      'name' => 'Grimer',
      'attack' => 80,
      'defense' => 50,
      'poke_type' => 'poison',
      'moves' => [
         'pound',
         'sludge'
      ],
    },
    '89' => {
      'name' => 'Muk',
      'attack' => 105,
      'defense' => 75,
      'poke_type' => 'poison',
      'moves' => [
         'pound',
         'sludge',
         'sludge bomb'
      ],
    },
    '91' => {
      'name' => 'Cloyster',
      'attack' => 95,
      'defense' => 180,
      'poke_type' => 'water',
      'moves' => [
         'aurora beam'
      ],
    },
    '92' => {
      'name' => 'Gastly',
      'attack' => 35,
      'defense' => 30,
      'poke_type' => 'ghost',
      'moves' => [
         'tackle',
         'lick'
      ],
    },
    '94' => {
      'name' => 'Gengar',
      'attack' => 65,
      'defense' => 60,
      'poke_type' => 'ghost',
      'moves' => [
         'tackle',
         'lick',
         'shadow punch',
         'shadow ball'
      ],
    },
    '95' => {
      'name' => 'Onix',
      'attack' => 45,
      'defense' => 160,
      'poke_type' => 'rock',
      'moves' => [
         'iron tail',
         'rock throw',
         'dragonbreath',
         'slam'
      ],
    },
    '96' => {
      'name' => 'Drowzee',
      'attack' => 48,
      'defense' => 45,
      'poke_type' => 'psychic',
      'moves' => [
         'pound',
         'confusion',
         'headbutt'
      ],
    },
    '97' => {
      'name' => 'Hypno',
      'attack' => 73,
      'defense' => 70,
      'poke_type' => 'psychic',
      'moves' => [
         'pound',
         'confusion',
         'headbutt',
         'psychic'
      ],
    },
    '98' => {
      'name' => 'Krabby',
      'attack' => 105,
      'defense' => 90,
      'poke_type' => 'water',
      'moves' => [
         'bubble',
         'vicegrip',
         'mud shot',
         'stomp'
      ],
    },
    '99' => {
      'name' => 'Kingler',
      'attack' => 130,
      'defense' => 115,
      'poke_type' => 'water',
      'moves' => [
         'stomp',
         'crabhammer',
         'vicegrip',
         'mud shot'
      ],
    },
    '100' => {
      'name' => 'Voltorb',
      'attack' => 30,
      'defense' => 50,
      'poke_type' => 'electric',
      'moves' => [
         'tackle',
         'spark'
      ],
    },
    '101' => {
      'name' => 'Electrode',
      'attack' => 50,
      'defense' => 70,
      'poke_type' => 'electric',
      'moves' => [
         'tackle',
         'spark',
         'swift'
      ],
    },
    '103' => {
      'name' => 'Exeggutor',
      'attack' => 95,
      'defense' => 85,
      'poke_type' => 'grass',
      'moves' => [
         'confusion',
         'stomp',
         'egg bomb'
      ],
    },
    '104' => {
      'name' => 'Cubone',
      'attack' => 50,
      'defense' => 95,
      'poke_type' => 'ground',
      'moves' => [
         'bone club',
         'headbutt'
      ],
    },
    '105' => {
      'name' => 'Marowak',
      'attack' => 80,
      'defense' => 110,
      'poke_type' => 'ground',
      'moves' => [
         'bone club',
         'headbutt'
      ],
    },
    '106' => {
      'name' => 'Hitmonlee',
      'attack' => 120,
      'defense' => 53,
      'poke_type' => 'fighting',
      'moves' => [
         'rolling kick'
      ],
    },
    '107' => {
      'name' => 'Hitmonchan',
      'attack' => 105,
      'defense' => 79,
      'poke_type' => 'fighting',
      'moves' => [
         'mega punch',
         'ice punch',
         'fire punch',
         'sky uppercut'
      ],
    },
    '108' => {
      'name' => 'Lickitung',
      'attack' => 55,
      'defense' => 75,
      'poke_type' => 'normal',
      'moves' => [
         'lick',
         'stomp',
         'slam'
      ],
    },
    '109' => {
      'name' => 'Koffing',
      'attack' => 65,
      'defense' => 95,
      'poke_type' => 'poison',
      'moves' => [
         'tackle',
         'smog',
         'sludge'
      ],
    },
    '110' => {
      'name' => 'Weezing',
      'attack' => 90,
      'defense' => 120,
      'poke_type' => 'poison',
      'moves' => [
         'tackle',
         'smog',
         'sludge'
      ],
    },
    '111' => {
      'name' => 'Rhyhorn',
      'attack' => 85,
      'defense' => 95,
      'poke_type' => 'ground',
      'moves' => [
         'horn attack',
         'stomp'
      ],
    },
    '112' => {
      'name' => 'Rhydon',
      'attack' => 130,
      'defense' => 120,
      'poke_type' => 'ground',
      'moves' => [
         'horn attack',
         'stomp',
         'earthquake',
         'megahorn'
      ],
    },
    '113' => {
      'name' => 'Chansey',
      'attack' => 5,
      'defense' => 5,
      'poke_type' => 'normal',
      'moves' => [
         'pound',
         'egg bomb'
      ],
    },
    '114' => {
      'name' => 'Tangela',
      'attack' => 55,
      'defense' => 115,
      'poke_type' => 'grass',
      'moves' => [
         'constrict',
         'vine whip',
         'slam'
      ],
    },
    '115' => {
      'name' => 'Kangaskhan',
      'attack' => 95,
      'defense' => 80,
      'poke_type' => 'normal',
      'moves' => [
         'bite',
         'mega punch',
         'dizzy punch'
      ],
    },
    '116' => {
      'name' => 'Horsea',
      'attack' => 40,
      'defense' => 70,
      'poke_type' => 'water',
      'moves' => [
         'bubble',
         'water gun',
         'twister'
      ],
    },
    '117' => {
      'name' => 'Seadra',
      'attack' => 65,
      'defense' => 95,
      'poke_type' => 'water',
      'moves' => [
         'bubble',
         'water gun',
         'twister',
         'hydro pump'
      ],
    },
    '118' => {
      'name' => 'Goldeen',
      'attack' => 67,
      'defense' => 60,
      'poke_type' => 'water',
      'moves' => [
         'peck',
         'horn attack'
      ],
    },
    '119' => {
      'name' => 'Seaking',
      'attack' => 92,
      'defense' => 65,
      'poke_type' => 'water',
      'moves' => [
         'peck',
         'horn attack',
         'waterfall',
         'megahorn'
      ],
    },
    '121' => {
      'name' => 'Starmie',
      'attack' => 75,
      'defense' => 85,
      'poke_type' => 'water',
      'moves' => [
         'water gun',
         'swift'
      ],
    },
    '122' => {
      'name' => 'Mr. mime',
      'attack' => 45,
      'defense' => 65,
      'poke_type' => 'psychic',
      'moves' => [
         'confusion',
         'magical leaf',
         'psybeam',
         'psychic'
      ],
    },
    '123' => {
      'name' => 'Scyther',
      'attack' => 110,
      'defense' => 80,
      'poke_type' => 'bug',
      'moves' => [
         'wing attack',
         'slash'
      ],
    },
    '124' => {
      'name' => 'Jynx',
      'attack' => 50,
      'defense' => 35,
      'poke_type' => 'ice',
      'moves' => [
         'body slam',
         'blizzard',
         'powder snow',
         'ice punch'
      ],
    },
    '125' => {
      'name' => 'Electabuzz',
      'attack' => 83,
      'defense' => 57,
      'poke_type' => 'electric',
      'moves' => [
         'thunderpunch',
         'swift',
         'thunderbolt',
         'thunder'
      ],
    },
    '126' => {
      'name' => 'Magmar',
      'attack' => 95,
      'defense' => 57,
      'poke_type' => 'fire',
      'moves' => [
         'fire blast',
         'smog',
         'fire punch',
         'flamethrower'
      ],
    },
    '127' => {
      'name' => 'Pinsir',
      'attack' => 125,
      'defense' => 100,
      'poke_type' => 'bug',
      'moves' => [
         'vicegrip'
      ],
    },
    '128' => {
      'name' => 'Tauros',
      'attack' => 100,
      'defense' => 95,
      'poke_type' => 'normal',
      'moves' => [
         'tackle',
         'horn attack'
      ],
    },
    '129' => {
      'name' => 'Magikarp',
      'attack' => 10,
      'defense' => 55,
      'poke_type' => 'water',
      'moves' => [
         'tackle'
      ],
    },
    '130' => {
      'name' => 'Gyarados',
      'attack' => 125,
      'defense' => 79,
      'poke_type' => 'water',
      'moves' => [
         'bite',
         'twister',
         'hydro pump'
      ],
    },
    '131' => {
      'name' => 'Lapras',
      'attack' => 85,
      'defense' => 80,
      'poke_type' => 'water',
      'moves' => [
         'water gun',
         'body slam',
         'ice beam',
         'hydro pump'
      ],
    },
    '133' => {
      'name' => 'Eevee',
      'attack' => 55,
      'defense' => 50,
      'poke_type' => 'normal',
      'moves' => [
         'tackle',
         'bite'
      ],
    },
    '135' => {
      'name' => 'Jolteon',
      'attack' => 65,
      'defense' => 60,
      'poke_type' => 'electric',
      'moves' => [
         'tackle',
         'thundershock',
         'thunder'
      ],
    },
    '136' => {
      'name' => 'Flareon',
      'attack' => 130,
      'defense' => 60,
      'poke_type' => 'fire',
      'moves' => [
         'flamethrower',
         'ember',
         'bite',
         'smog'
      ],
    },
    '137' => {
      'name' => 'Porygon',
      'attack' => 60,
      'defense' => 70,
      'poke_type' => 'normal',
      'moves' => [
         'tackle',
         'psybeam',
         'zap cannon'
      ],
    },
    '138' => {
      'name' => 'Omanyte',
      'attack' => 40,
      'defense' => 100,
      'poke_type' => 'rock',
      'moves' => [
         'constrict',
         'bite',
         'water gun',
         'mud shot'
      ],
    },
    '139' => {
      'name' => 'Omastar',
      'attack' => 60,
      'defense' => 125,
      'poke_type' => 'rock',
      'moves' => [
         'ancientpower',
         'hydro pump',
         'water gun',
         'mud shot'
      ],
    },
    '140' => {
      'name' => 'Kabuto',
      'attack' => 80,
      'defense' => 90,
      'poke_type' => 'rock',
      'moves' => [
         'scratch',
         'mud shot'
      ],
    },
    '141' => {
      'name' => 'Kabutops',
      'attack' => 115,
      'defense' => 105,
      'poke_type' => 'rock',
      'moves' => [
         'scratch',
         'mud shot',
         'slash',
         'ancientpower'
      ],
    },
    '142' => {
      'name' => 'Aerodactyl',
      'attack' => 105,
      'defense' => 65,
      'poke_type' => 'rock',
      'moves' => [
         'wing attack',
         'bite',
         'ancientpower'
      ],
    },
    '143' => {
      'name' => 'Snorlax',
      'attack' => 110,
      'defense' => 65,
      'poke_type' => 'normal',
      'moves' => [
         'tackle',
         'headbutt',
         'snore',
         'body slam'
      ],
    },
    '144' => {
      'name' => 'Articuno',
      'attack' => 85,
      'defense' => 100,
      'poke_type' => 'ice',
      'moves' => [
         'gust',
         'powder snow',
         'ice beam',
         'blizzard'
      ],
    },
    '145' => {
      'name' => 'Zapdos',
      'attack' => 90,
      'defense' => 85,
      'poke_type' => 'electric',
      'moves' => [
         'peck',
         'thundershock',
         'drill peck',
         'thunder'
      ],
    },
    '146' => {
      'name' => 'Moltres',
      'attack' => 100,
      'defense' => 90,
      'poke_type' => 'fire',
      'moves' => [
         'wing attack',
         'ember',
         'flamethrower',
         'heat wave'
      ],
    },
    '147' => {
      'name' => 'Dratini',
      'attack' => 64,
      'defense' => 45,
      'poke_type' => 'dragon',
      'moves' => [
         'twister',
         'slam'
      ],
    },
    '148' => {
      'name' => 'Dragonair',
      'attack' => 84,
      'defense' => 65,
      'poke_type' => 'dragon',
      'moves' => [
         'twister',
         'slam'
      ],
    },
    '149' => {
      'name' => 'Dragonite',
      'attack' => 134,
      'defense' => 95,
      'poke_type' => 'dragon',
      'moves' => [
         'twister',
         'slam',
         'wing attack'
      ],
    },
    '150' => {
      'name' => 'Mewtwo',
      'attack' => 110,
      'defense' => 90,
      'poke_type' => 'psychic',
      'moves' => [
         'confusion',
         'swift',
         'psychic'
      ],
    },
    '151' => {
      'name' => 'Mew',
      'attack' => 100,
      'defense' => 100,
      'poke_type' => 'psychic',
      'moves' => [
         'pound',
         'mega punch',
         'psychic',
         'ancientpower'
      ],
    }
  }

  pokemon = pokemon.map do |num, stats|
    stats['image_url'] = "#{num}.svg"
    stats
  end

  Pokemon.create!(pokemon)
  
  Pokemon.all.each do |pokemon|
    3.times { create_random_item!(pokemon) }
  end
end
