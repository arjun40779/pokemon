import React, { useState } from "react";
import Expanded from "./Expanded";

export const Card = (props) => {
  const { id, name, image, type } = props.pokemonData[0];
  const [expanded, setExpanded] = useState(false);
  const handleClick = () => {
    setExpanded(true);
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
        <Expanded pokemonData={props.pokemonData} setExpanded={setExpanded} />
      ) : null}
    </div>
  );
};
