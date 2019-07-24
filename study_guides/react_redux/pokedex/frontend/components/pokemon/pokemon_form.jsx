import React from 'react';

import { withRouter } from 'react-router-dom';

class PokemonForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      image_url: '',
      poke_type: 'bug',
      attack: '',
      defense: '',
      moves: {}
    };
    this.updateMoves = this.updateMoves.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createPokemon(this.state)
      .then(data => this.props.history.push(`/pokemon/${data.pokemon.id}`));
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  updateMoves(e) {
    this.setState({
      moves: Object.assign(
        {},
        this.state.moves,
        { [e.target.id]: e.target.value }
      )
    });
  }

  errors() {
    if (this.props.errors) {
      return (
        this.props.errors.map(error => {
          return (<li className="error" key={error}>{error}</li>);
        })
      );
    }
  }

  render() {
    return (
      <section className="pokemon-detail">
        <img src="/assets/pokemon-logo.svg" alt="Copyright of Nintendo Pokemon"/>
        <ul>
          {this.errors()}
        </ul>
        <form className="pokemon-form" onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.name}
              placeholder="Name"
              onChange={this.update('name')}
            />
            <input
              type="text"
              value={this.state.image_url}
              placeholder="Image Url"
              onChange={this.update('image_url')}
            />
            <select
              value={this.state.type}
              onChange={this.update('poke_type')}
              defaultValue="Select Pokemon Type"
            >
              {POKEMON_TYPES.map((type, i) => {
                return <option value={type} key={i}>{type}</option>;
              })}
            </select>
            <input
              type="number"
              value={this.state.attack}
              placeholder="Attack"
              onChange={this.update('attack')}
            />
            <input
              type="number"
              value={this.state.defense}
              placeholder="Defense"
              onChange={this.update('defense')}
            />
            <input
              type="text"
              id="move_1"
              value={this.state.moves.move_1 || ''}
              placeholder="Move 1"
              onChange={this.updateMoves}
            />
            <input
              type="text"
              id="move_2"
              value={this.state.moves.move_2 || ''}
              placeholder="Move 2"
              onChange={this.updateMoves}
            />
          <button>Create Pokemon</button>
        </form>
      </section>
    );
  }
}

export default withRouter(PokemonForm);
