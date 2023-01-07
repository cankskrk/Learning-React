import React from "react";
import Input from "./Input";
import "bootstrap/dist/css/bootstrap.css";

function Login() {
  return (
    <div>
      <Input type={"text"} placeholder={"Username"} />
      <Input type={"password"} placeholder={"Password"} />
      <button type="submit">Login</button>
    </div>
  );
}

export default Login;
