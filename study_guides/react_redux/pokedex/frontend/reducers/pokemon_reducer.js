import merge from 'lodash/merge';

import {
  RECEIVE_ALL_POKEMON,
  RECEIVE_SINGLE_POKEMON
} from '../actions/pokemon_actions';

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);

  let poke;

  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      debugger
      return merge({}, state, action.pokemon);
    case RECEIVE_SINGLE_POKEMON:
      debugger
      poke = action.payload.pokemon;

      return merge({}, state, { [poke.id]: poke });
    default:
      return state;
  }
};

export default pokemonReducer;
