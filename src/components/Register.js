import React from "react";
import Input from "./Input";
import Button from "./Button";

function Register() {
  return (
    <div>
      <div className="d-flex justify-content-center m-2">
        <Input type="text" placeholder="Username" />
      </div>
      <div className="d-flex justify-content-center m-2">
        <Input type="password" placeholder="Password" />
      </div>
      <div className="d-flex justify-content-center m-2">
        <Input type="password" placeholder="Confirm Password" />
      </div>
      <div className="d-flex justify-content-center m-2">
        <Button type="submit" name="Register" className="btn-primary" />
      </div>
    </div>
  );
}

export default Register;
