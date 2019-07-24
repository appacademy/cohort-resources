export const fetchAllPokemon = () => {
  debugger
  return $.ajax({
    method: 'GET',
    url: 'api/pokemon'
  });
};

export const fetchSinglePokemon = id => {
  debugger
  return $.ajax({
    method: 'GET',
    url: `api/pokemon/${id}`
  });
};

export const createPokemon = (pokemon) => {
  pokemon.moves = Object.keys(pokemon.moves).map(k => pokemon.moves[k]);

  return $.ajax({
    method: 'POST',
    url: 'api/pokemon/',
    data: { pokemon }
  });
};
