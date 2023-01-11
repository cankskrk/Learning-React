import React from "react";
import Input from "./Input";
import Button from "./Button";

function Register() {
  return (
    <div>
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      <Input type="password" placeholder="Confirm Password" />
      <Button type="submit" name="Register" className="btn-primary" />
    </div>
  );
}

export default Register;
