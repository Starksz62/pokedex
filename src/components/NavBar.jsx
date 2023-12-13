import React from "react";

const NavBar = ({ pokemonList, changePokemon }) => {
  return (
    <div>
      {pokemonList.map((pokemon, useState) => (
        <button
          key={pokemon.name}
          onClick={() => {
            changePokemon(useState);
            if (pokemon.name === "pikachu") {
              alert("pika pikachu !!!");
            }
          }}
        >
          {pokemon.name}
        </button>
      ))}
    </div>
  );
};

export default NavBar;