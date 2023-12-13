import PokemonCard from "./components/PokemonCard";
import { useState } from "react";
import NavBar from "./components/NavBar";


const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];


function App () {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  const nextPokemon = () => {
    if (pokemonIndex < pokemonList.length - 1 ) {
    setPokemonIndex(pokemonIndex + 1) }
  }
  const previousPokemon = () => {
    if (pokemonIndex > 0) {
    setPokemonIndex(pokemonIndex - 1) }
  }

  return (
    <div>
      <PokemonCard pokemon ={pokemonList[pokemonIndex]}/>

      <NavBar
       previousPokemon={previousPokemon} 
       nextPokemon= {nextPokemon} 
        />
    </div>
  )
}
export default App;