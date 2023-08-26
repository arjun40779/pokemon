import React from "react";

export const Expended = (props) => {
  console.log(props);
  const { setExpended } = props;
  const close = () => {
    setExpended(false);
  };
  return (
    <div className={`expended-view ${props.pokemonData.type}`}>
      <div className="expanded-left"
      <button className={`${props.pokemonData.type}`} onClick={close}>
        close
      </button>
    </div>
  );
};
