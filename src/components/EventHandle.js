import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";

function EventHandle() {
  const [buttonBackground, setButtonBackground] = useState("bg-light");

  const mouseOver = () => {
    setButtonBackground("bg-dark");
  };

  const mouseOut = () => {
    setButtonBackground("bg-light");
  };

  return (
    <div className="text-center bg-danger">
      <h1>HELLO</h1>
      <Input type="text" placeholder="What's your name?" />
      <Button
        type="submit"
        name="Submit"
        className={`btn-light text-primary ${buttonBackground} fw-bolder m-2 border-0`}
        mouseOver={mouseOver}
        mouseOut={mouseOut}
      />
    </div>
  );
}

export default EventHandle;
