import React, { useEffect, useState } from "react";
import PokemonCard from "./components/PokemonCard";

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
      const data = await res.json();
      const pokemonData = await Promise.all(
        data.results.map(async (pokemon) => {
          const res = await fetch(pokemon.url);
          const details = await res.json();
          return {
            name: pokemon.name,
            image: details.sprites.front_default,
          };
        })
      );
      setPokemons(pokemonData);
    };

    fetchPokemons();
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#fbeecb",
        minHeight: "100vh",
        padding: "40px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {pokemons.map((p) => (
          <PokemonCard key={p.name} name={p.name} image={p.image} />
        ))}
      </div>
    </div>
  );
}

export default App;
