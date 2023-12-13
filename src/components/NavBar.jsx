import React from "react";

const NavBar = ({pokemonList, changePokemon}) => {
    return (
<div>
{pokemonList.map((pokemon, index) => (
        <button key={pokemon.name} onClick={() => changePokemon(index)}>
          {pokemon.name}
        </button>
      ))}

</div>
    );
};



export default NavBar;