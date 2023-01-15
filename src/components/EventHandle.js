import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";

function EventHandle() {
  // States
  const [buttonBackground, setButtonBackground] = useState("bg-light");
  const [name, setName] = useState("");

  // Functions I Created
  const mouseOver = () => {
    setButtonBackground("bg-dark");
  };

  const mouseOut = () => {
    setButtonBackground("bg-light");
  };

  const handleChange = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };

  return (
    <div className="text-center bg-danger">
      <h1>HELLO {name}</h1>
      <Input
        type="text"
        placeholder="What's your name?"
        onChange={handleChange}
      />
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
