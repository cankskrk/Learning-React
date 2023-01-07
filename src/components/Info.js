import React from "react";
import infoCSS from "./Info.module.css";

function Info({ name, description }) {
  return (
    <div>
      <h3 className={infoCSS.pokeName}>{name}</h3>
      <p className={infoCSS.pokeDesc}>{description}</p>
    </div>
  );
}

export default Info;
