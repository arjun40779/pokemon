import React, { useEffect, useState } from "react";

export const Card = (props) => {
  console.log(props);
  const { id, name, image, type } = props.pokemonData;

  return (
    <div className={`card ${type}`}>
      <p className="poki__no">#{id}</p>
      <img className="poki__img" src={image} />

      <h3>{name}</h3>
      <p className="poki__type">Type: {type}</p>
    </div>
  );
};
