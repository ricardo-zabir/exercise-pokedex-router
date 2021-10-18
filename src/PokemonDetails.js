import React from "react";

class PokemonDetails extends React.Component {
  render(){
    const {name, type, averageWeight, image, summary, foundAt} = this.props.pokemon;
    return(
      <div className="pokemon">
        <div>
          <p>{name}</p>
          <p>{type}</p>
          <p>
            Average weight: {`${averageWeight.value} ${averageWeight.measurementUnit}`}
          </p>
          <p>{summary}</p>
        </div>
        <img src={image} alt={`${name} sprite`} />
        <div>Encontrado em: 
          {foundAt.map((place) => {
            return <img src={place.map} width='100px' alt='Mapa onde pokemon se encontra' />
          })}
        </div>
      </div>
    )
  }
}

export default PokemonDetails