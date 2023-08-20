import React from "react";

export const Container = (props) => {
  console.log(props);
  return (
    <div className="container">
      {props.items.map((item) => {
        return <h3 key={item.name}>{item.name}</h3>;
      })}
    </div>
  );
};
