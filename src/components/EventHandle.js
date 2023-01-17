import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";

function EventHandle() {
  // States
  const [buttonBackground, setButtonBackground] = useState("bg-light");
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
  });

  // Functions I Created
  const mouseOver = () => {
    setButtonBackground("bg-dark");
  };

  const mouseOut = () => {
    setButtonBackground("bg-light");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFullName((prevValue) => ({
      ...prevValue,
      [name]: value,

      // if (name === "fName") {
      //   return {
      //     fName: value,
      //     lName: prevValue.lName,
      //   };
      // } else if (name === "lName") {
      //   return {
      //     fName: prevValue.fName,
      //     lName: value,
      //   };
      // }

      // return {
      //   ...prevValue,
      //   [name]: value,
      // };
    }));
  };

  const handleClick = (event) => {
    event.preventDefault();
  };

  return (
    <div className="text-center bg-danger p-4">
      <h1>HELLO {`${fullName.fName} ${fullName.lName}`}</h1>
      <form onSubmit={handleClick}>
        <div className="d-flex justify-content-center m-1">
          <Input
            type="text"
            name="fName"
            placeholder="What's your first name?"
            onChange={handleChange}
          />
        </div>
        <div className="d-flex justify-content-center m-1">
          <Input
            type="text"
            name="lName"
            placeholder="What's your last name?"
            onChange={handleChange}
          />
        </div>
        <div className="d-flex justify-content-center">
          <Button
            type="submit"
            name="Submit"
            className={`btn-light text-primary ${buttonBackground} fw-bolder m-2 border-0`}
            mouseOver={mouseOver}
            mouseOut={mouseOut}
            click={handleClick}
          />
        </div>
      </form>
    </div>
  );
}

export default EventHandle;
