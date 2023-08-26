import { useEffect, useState } from "react";
import "./styles.css";
import Header from "./components/Header";

import { Card } from "./components/Card";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState(
    "https://content.newtonschool.co/v1/pr/64ccef982071a9ad01d36ff6/pokemonspages1"
  );

  const fetchPokemons = async () => {
    setLoading(true);
    const res = await fetch(url);
    const data = await res.json();
    let list = data[0].results;
    setUrl(data[0].next);
    let pokiList = [];
    for (const pokemon of list) {
      const { url } = pokemon;
      const res = await fetch(url);
      const data = await res.json();
      pokiList.push(data);
    }
    setPokemonList((prev) => {
      return [...prev, ...pokiList];
    });
    /*   console.log(pokemonList); */
    setLoading(false);
  };
  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <div className="App">
      {loading ? null : (
        <>
          <Header />
          <div className="container">
            {pokemonList &&
              pokemonList.length &&
              pokemonList.map((pokemonData) => {
                return <Card pokemonData={pokemonData} />;
              })}
          </div>
          <button onClick={fetchPokemons} className="load-more">
            Load More
          </button>
        </>
      )}
    </div>
  );
}

export default App;
