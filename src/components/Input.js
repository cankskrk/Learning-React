import React from "react";

function Input({ type, placeholder }) {
  return (
    <div>
      <input className="m-1" type={type} placeholder={placeholder} />
    </div>
  );
}

export default Input;
