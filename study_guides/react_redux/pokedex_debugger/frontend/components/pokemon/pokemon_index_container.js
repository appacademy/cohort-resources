import { connect } from 'react-redux';

import PokemonIndex from './pokemon_index';
import { requestAllPokemon } from '../../actions/pokemon_actions';
import { selectAllPokemon } from '../../reducers/selectors';

const mapStateToProps = state => {
  debugger
  return {
    pokemon: selectAllPokemon(state),
    loading: state.ui.loading.indexLoading
  };
};

const mapDispatchToProps = dispatch => {
  debugger
  return {
    requestAllPokemon: () => {
      debugger
      dispatch(requestAllPokemon())
    }
  }
};

export default connect(
  mapStateToProps, //msp
  mapDispatchToProps //mdp
)(PokemonIndex);
