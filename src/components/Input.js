import React from "react";

function Input({ type, name, placeholder, className, onChange, value }) {
  return (
    <div className="d-flex align-items-center">
      <input
        className={`form-control ${className}`}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        value={value}
      />
    </div>
  );
}

export default Input;
