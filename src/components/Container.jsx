import React from "react";
import { Card } from "./Card";

export const Container = (props) => {
  const { pokemonList } = props;
  return (
    <div className="container">
      {pokemonList.map((pokemonData) => {
        return <Card key={pokemonData[0].id} pokemonData={pokemonData[0]} />;
      })}
    </div>
  );
};
