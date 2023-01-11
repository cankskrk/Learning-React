import React from "react";

function Button({ type, name, func, className }) {
  return (
    <div>
      <button className={`btn ${className}`} type={type} onClick={func}>
        {name}
      </button>
    </div>
  );
}

export default Button;
