import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import {BrowserRouter,Route,Link} from 'react-router-dom'
import Nav from './Nav';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <h1> Pokedex </h1>
      <Nav />
      <Route  path='/' render={() => <Pokedex pokemons={pokemons} /> }  />
      </BrowserRouter>
    </div>
  );
}

export default App;

