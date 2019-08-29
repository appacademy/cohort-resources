import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
export const RECEIVE_SINGLE_POKEMON = 'RECEIVE_SINGLE_POKEMON';
export const START_LOADING_ALL_POKEMON = 'START_LOADING_ALL_POKEMON';
export const START_LOADING_SINGLE_POKEMON = 'START_LOADING_SINGLE_POKEMON';
export const CREATE_POKEMON = 'CREATE_POKEMON';
export const RECEIVE_POKEMON_ERRORS = 'RECEIVE_POKEMON_ERRORS';

// export const requestAllPokemon = () => (dispatch) => {
//   debugger
//   return APIUtil.fetchAllPokemon()
//     .then(pokemon => {
//       debugger
//       dispatch(receiveAllPokemon(pokemon))
//     });
// }

export const requestAllPokemon = () => {
  debugger
  return (dispatch) => {
    debugger
    return APIUtil.fetchAllPokemon()
      .then(pokemon => {
        debugger
        dispatch(receiveAllPokemon(pokemon))
      });
  }
}


export const requestSinglePokemon = (id) => (dispatch) => {
  debugger
  return APIUtil.fetchSinglePokemon(id).then(pokemon => {
    debugger
    dispatch(receiveSinglePokemon(pokemon));
    return pokemon;
  });
}

export const createPokemon = pokemon => dispatch => (
  APIUtil.createPokemon(pokemon).then(pokemon => {
    dispatch(receiveSinglePokemon(pokemon));
    return pokemon;
  }).fail(err => dispatch(receivePokemonErrors(err.responseJSON)))
);

export const startLoadingAllPokemon = () => ({
  type: START_LOADING_ALL_POKEMON
});

export const startLoadingSinglePokemon = () => ({
  type: START_LOADING_SINGLE_POKEMON
});

export const receiveAllPokemon = pokemon => {
  debugger
  return {
    type: RECEIVE_ALL_POKEMON,
    pokemon
  }
};

export const receiveSinglePokemon = payload => {
  debugger
  return {
    type: RECEIVE_SINGLE_POKEMON,
    payload,
  }
};

export const receivePokemonErrors = errors => ({
  type: RECEIVE_POKEMON_ERRORS,
  errors
});
