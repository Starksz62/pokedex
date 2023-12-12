import React from 'react';


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
export default PokemonCard;

