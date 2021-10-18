import React from "react";
import { Link } from 'react-router-dom'

class Nav extends React.Component {
  render() {
    return(
      <nav className="links">
        <Link to='/'>
          <button>Home</button>
        </Link>
        <Link to='/Pokemons'>
          <button>Pokedex</button>
        </Link>
        <Link to='/about'>
          <button>Sobre</button>
        </Link>
      </nav>
    )
  }
}

export default Nav