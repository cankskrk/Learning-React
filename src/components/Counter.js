import React, { useState } from "react";
import Button from "./Button";

function Counter() {
  const [number, setNumber] = useState(0);

  const increase = () => {
    setNumber(number + 1);
  };

  const decrease = () => {
    setNumber(number - 1);
  };

  return (
    <div className="mt-5">
      <div>{number}</div>
      <div className="d-inline-flex">
        <Button
          name="+"
          type="button"
          click={increase}
          className="btn-success m-2"
        />
        <Button
          name="-"
          type="button"
          click={decrease}
          className="btn-danger m-2"
        />
      </div>
    </div>
  );
}

export default Counter;
