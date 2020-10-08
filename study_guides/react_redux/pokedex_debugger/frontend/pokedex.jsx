import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';

import configureStore from './store/store';
import PokemonIndexContainer from './components/pokemon/pokemon_index_container';
import PokemonDetailContainer from './components/pokemon/pokemon_detail_container';

const Root = ({ store }) => {
  debugger
  return(
  <Provider store={store}>
    <HashRouter>
      <div>
        <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer} />
        <Route exact path="/" component={PokemonIndexContainer} />
      </div>
    </HashRouter>
  </Provider>
  )
}
;

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');
  debugger
  ReactDOM.render(<Root store={store} />, root);
});
