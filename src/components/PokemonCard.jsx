import React from 'react';
const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];

function PokemonCard () {
    const pokemon = pokemonList[0]     
    // création d'une constante pour récupérer les éléments de mon tableau 
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

