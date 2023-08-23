import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { Container } from "./components/Container";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);

  //
  const fetchPokemons = async () => {
    setLoading(true);
    const res = await fetch(
      "https://content.newtonschool.co/v1/pr/64ccef982071a9ad01d36ff6/pokemonspages1"
    );
    const data = await res.json();
    let list = data[0].results;

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
      <Header />
      {loading ? null : <Container pokemonList={pokemonList} />}
    </div>
  );
}

export default App;
