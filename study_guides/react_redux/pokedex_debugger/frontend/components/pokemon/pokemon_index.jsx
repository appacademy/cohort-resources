import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import PokemonIndexItem from './pokemon_index_item';
import LoadingIcon from './loading_icon';
import PokemonFormContainer from './pokemon_form_container';
import PokemonDetailContainer from './pokemon_detail_container';

class PokemonIndex extends Component {
  constructor(props) {
    debugger
    super(props)
  }

  componentDidMount() {
    debugger
    this.props.requestAllPokemon();
  }

  render() {
    debugger
    const { pokemon } = this.props;

    return (
      <section className="pokedex">
        <ul>
          {pokemon.map(poke => <PokemonIndexItem key={poke.id} pokemon={poke} />)}
        </ul>
      </section>
    );
  }
}

export default PokemonIndex;


// if (loading) { return <LoadingIcon />; }

// <Route exact path="/" component={PokemonFormContainer} />


// <Route
//   path="/pokemon/:pokemonId"
//   component={PokemonDetailContainer}
//   />
