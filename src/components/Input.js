import React from "react";

function Input({ type, name, placeholder, className, onChange }) {
  return (
    <div className="d-flex align-items-center">
      <input
        className={`form-control ${className}`}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
      />
    </div>
  );
}

export default Input;
