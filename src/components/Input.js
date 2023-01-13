import React from "react";

function Input({ type, placeholder, className }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-4 offset-sm-4">
          <input
            className={`form-control ${className}`}
            type={type}
            placeholder={placeholder}
          />
        </div>
      </div>
    </div>
  );
}

export default Input;
