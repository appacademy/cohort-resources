import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Item from '../items/item';
import LoadingIcon from './loading_icon';
import ItemDetailContainer from '../items/item_detail_container';

class PokemonDetail extends Component {
  componentDidMount() {
    debugger
    this.props.requestSinglePokemon(this.props.match.params.pokemonId);
  }

  componentDidUpdate(prevProps) {
    debugger
    if (prevProps.match.params.pokemonId !== this.props.match.params.pokemonId) {
      this.props.requestSinglePokemon(this.props.match.params.pokemonId);
    }
  }

  render() {
    debugger
    const { pokemon, items } = this.props;

    if (!pokemon) return null;

    return (
      <section className="pokemon-detail">
        <figure>
          <img src={pokemon.image_url} alt={pokemon.name} />
        </figure>
        <ul>
          <li>
            <h2>{pokemon.name}</h2>
          </li>
          <li>Type: {pokemon.poke_type}</li>
          <li>Attack: {pokemon.attack}</li>
          <li>Defense: {pokemon.defense}</li>
          <li>Moves: {pokemon.moves.join(', ')}</li>
        </ul>
        <section className="toys">
          <h3>Items</h3>
          <ul className="toy-list">
            {items.map(item => <Item key={item.name} item={item} />)}
          </ul>
        </section>

        <Route path="/pokemon/:pokemonId/item/:itemId" component={ItemDetailContainer} />
      </section>
    );
  }
}

export default PokemonDetail;

// if (loading) {
//   return <section className="pokemon-detail"><LoadingIcon /></section>;
// }
