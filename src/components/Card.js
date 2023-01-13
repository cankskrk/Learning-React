import React from "react";
import Cards from "./CssFile/Cards.module.css";
import Info from "./Info";

// const customStyle = {
//   margin: "2rem auto",
//   height: "14rem",
//   width: "10rem",
//   backgroundColor: "orange",
//   border: "solid 2px",
//   boxShadow: "1rem 1rem 0.5rem darkgrey",
// };

function Card({ pokemonIndex, name, description }) {
  return (
    <div className={Cards.card}>
      <h2>Pokemon#{`${pokemonIndex}`}</h2>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`}
        alt="img"
      />
      <Info name={name} description={description} />
    </div>
  );
}

export default Card;
