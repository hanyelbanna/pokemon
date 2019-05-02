import React, { useState } from "react";
import Pokedex from "./Pokedex";
import "./Pokegame.css";

function Pokegame(props) {
  const [pokemonList, setPokemonList] = useState([...props.pokemon]);
  const [hand1, setHand1] = useState([]);
  const [hand2, setHand2] = useState([]);

  let randIdx = Math.floor(Math.random() * pokemonList.length);

  let exp = pokemonList.reduce(
    (exp, pokemon) => exp + pokemon.base_experience,
    0
  );
  let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
  let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
  return (
    <div className="Pokegame">
      {hand1.length < 4 && (
        <button
          onClick={() => {
            setHand1([...hand1, pokemonList[randIdx]]);
            setPokemonList(pokemonList.filter((v, i) => i != randIdx));
          }}
        >
          Player 1
        </button>
      )}
      {hand2.length < 4 && (
        <button
          onClick={() => {
            setHand2([...hand2, pokemonList[randIdx]]);
            setPokemonList(pokemonList.filter((v, i) => i != randIdx));
          }}
        >
          Player 2
        </button>
      )}
      <Pokedex pokemon={hand1} exp={exp1} isWinner={exp1 > exp2} />
      <Pokedex pokemon={hand2} exp={exp2} isWinner={exp1 < exp2} />
    </div>
  );
}

Pokegame.defaultProps = {
  pokemon: [
    { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
    { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
    { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
    { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
    { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
    { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
    { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
    { id: 133, name: "Eevee", type: "normal", base_experience: 65 }
  ]
};

export default Pokegame;
