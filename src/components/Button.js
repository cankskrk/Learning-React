import React from "react";

function Button({ type, name, click, mouseOver, mouseOut, className }) {
  return (
    <div>
      <button
        className={`btn ${className}`}
        type={type}
        onClick={click}
        onMouseOver={mouseOver}
        onMouseOut={mouseOut}
      >
        {name}
      </button>
    </div>
  );
}

export default Button;
