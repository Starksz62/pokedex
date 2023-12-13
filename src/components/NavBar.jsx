import React from "react";

const NavBar = ({previousPokemon, nextPokemon}) => {
    return (
<div>
<button onClick={previousPokemon}>précédent</button>
<button onClick={nextPokemon}>suivant</button> 
</div>
    );
};



export default NavBar;