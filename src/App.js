import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { Container } from "./components/Container";

function App() {
  const [pokemons, setPokemon] = useState({});
  const [loading, setLoading] = useState(true);
  const fetchPokemon = async () => {
    setLoading(true);
    const res = await fetch(
      "https://content.newtonschool.co/v1/pr/64ccef982071a9ad01d36ff6/pokemonspages1"
    );
    const data = await res.json();
    setPokemon(data[0].results);
    setLoading(false);
  };
  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <div className="App">
      <Header />
      {loading ? null : <Container items={pokemons} />}
    </div>
  );
}

export default App;
