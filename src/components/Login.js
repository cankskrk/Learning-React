import React from "react";
import Input from "./Input";
import Button from "./Button";

function Login() {
  return (
    <div>
      <Input type={"text"} placeholder={"Username"} />
      <Input type={"password"} placeholder={"Password"} />
      <Button type="submit" name="Login" />
    </div>
  );
}

export default Login;
