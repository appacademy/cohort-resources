import React from 'react';
import { Link } from 'react-router-dom';

const PokemonIndexItem = ({ pokemon }) => (
  <li className="pokemon-index-item">
    <Link to={`/pokemon/${pokemon.id}`}>
      <span>{pokemon.id}</span>
      <img src={pokemon.image_url} alt={pokemon.name} />
      <span>{pokemon.name}</span>
    </Link>
  </li>
);

export default PokemonIndexItem;
