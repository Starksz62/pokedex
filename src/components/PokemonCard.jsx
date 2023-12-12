import React from 'react';
import PropTypes from 'prop-types';

function PokemonCard ({pokemon}) {
console.log(pokemon)
  return (

<figure>
    {pokemon.imgSrc ? (
    <img src = {pokemon.imgSrc} alt={pokemon.name} />) : (
        <p>???</p>
    )}
    {/*  condition ternaire  est-ce que pokemon.imgSrc est bien défini ? si oui tu m'affiches la src et l'alt(nom) sinon tu me mets ???*/}
    <figcaption>{pokemon.name}</figcaption>
    {/* dans tous les cas affiche moi le nom du pokémon à la fin de ma condition */}
</figure>
  );

}


PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
  name: PropTypes.string.isRequired,
  imgSrc: PropTypes.string,
}).isRequired
}
export default PokemonCard;


