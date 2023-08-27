import React, { useEffect, useState } from "react";
import "./App.css";
import { Card } from "./components/Card";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState(
    "https://content.newtonschool.co/v1/pr/64ccef982071a9ad01d36ff6/pokemonspages1"
  );

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      const list = data[0].results;
      setUrl(data[0].next);
      const pokiList = await Promise.all(
        list.map(async (pokemon) => {
          const res = await fetch(pokemon.url);
          return res.json();
        })
      );
      setPokemonList((prev) => [...prev, ...pokiList]);
    } catch (error) {
      console.error("Error fetching Pokémon:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <div className="App">
      <header className="header">
        <h2>Pokemon </h2>
        <h2> KingDom</h2>
      </header>
      <div className="container">
        {pokemonList.map((pokemonData, index) => (
          <Card key={index} pokemonData={pokemonData} />
        ))}
      </div>
      {!loading && (
        <button onClick={fetchPokemons} className="load-more">
          Load More
        </button>
      )}
    </div>
  );
}

export default App;
