import React, { useEffect, useState } from "react";
import { Expended } from "./Expended";

export const Card = (props) => {
  console.log(props);
  const { id, name, image, type } = props.pokemonData[0];
  const [expanded, setExpended] = useState(false);
  const handleClick = () => {
    setExpended(true);
  };
  return (
    <div className={`card ${type}`}>
      <p className="number">#{id}</p>
      <img className="poki__img" alt={`${name}`} src={image} />
      <h3>{name}</h3>
      <p className="poki__type">Type: {type}</p>
      <button className="load-more" onClick={handleClick}>
        <p className="pokeinfo">Know More</p>
      </button>
      {expanded ? (
        <Expended pokemonData={props.pokemonData} setExpended={setExpended} />
      ) : null}
    </div>
  );
};
