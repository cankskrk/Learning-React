import React from "react";

function Button({ type, name }) {
  return (
    <div>
      <button className="btn btn-primary m-3 text-white" type={type}>
        {name}
      </button>
    </div>
  );
}

export default Button;
