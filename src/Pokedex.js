import React from 'react';
import Pokemon from './Pokemon';
import Button from './Button';
import './pokedex.css';
import { Route, Link, Switch } from 'react-router-dom';
import pokemons from './data';
import PokemonDetails from './PokemonDetails';
import About from './About';
import NotFound from './NotFound';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {pokemonIndex: 0, filteredType: 'all'};
  }

  filterPokemons(filteredType) {
    this.setState({filteredType, pokemonIndex: 0});
  }

  nextPokemon(numberOfPokemons) {
    this.setState(state => ({
      pokemonIndex: (state.pokemonIndex + 1) % numberOfPokemons,
    }));
  }

  fetchFilteredPokemons() {
    const {pokemons} = this.props;
    const {filteredType} = this.state;

    return pokemons.filter(pokemon => {
      if (filteredType === 'all') return true;
      return pokemon.type === filteredType;
    });
  }

  fetchPokemonTypes() {
    const {pokemons} = this.props;

    return [...new Set(pokemons.reduce((types, {type}) => [...types, type], []))];
  }

  render() {
    const filteredPokemons = this.fetchFilteredPokemons();
    const pokemonTypes = this.fetchPokemonTypes();
    const pokemon = filteredPokemons[this.state.pokemonIndex];

    return (
    <div>
      <Switch>
      <Route path='/Pokemons/:pokeName' render={(props) => {
        return <div><PokemonDetails pokemon={pokemons.find((pokemon) => pokemon.name === props.match.params.pokeName)} />
        <Link to='/Pokemons'>
          Voltar a pokedex
        </Link>
        </div>
      }} />
      <Route path='/about' render={() => <About />} />
      <Route exact path={['/Pokemons','/']} render={ () => {
      return <div className="pokedex">
        <Pokemon pokemon={pokemon} />
        <div className="pokedex-buttons-panel">
          <Button
            onClick={() => this.filterPokemons('all')}
            className="filter-button">
            All
          </Button>
          {pokemonTypes.map(type => (
            <Button
              key={type}
              onClick={() => this.filterPokemons(type)}
              className="filter-button">
              {type}
            </Button>
          ))}
        </div>
        <Button
          className="pokedex-button"
          onClick={() => this.nextPokemon(filteredPokemons.length)}
          disabled={filteredPokemons.length <= 1}>
          Próximo pokémon
        </Button>
        <Link to={`/Pokemons/${pokemon.name}`}>
          Obter mais detalhes
        </Link>
      </div>}} />
      <Route path='*' render={() => <NotFound />} />
      </Switch>
    </div>
    );
  }
}

export default Pokedex;