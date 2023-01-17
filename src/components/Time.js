import React, { useState } from "react";
import Button from "./Button";

function Time() {
  const [time, setTime] = useState("TIME");

  const getTime = () => {
    setInterval(() => {
      let time = new Date().toLocaleTimeString();
      setTime(time);
    }, 1000);
  };

  return (
    <div className="mt-5">
      <div className="d-flex justify-content-center">
        <h1>{time}</h1>
      </div>
      <div className="d-flex justify-content-center">
        <Button
          name="Get Time"
          type="button"
          click={getTime}
          className="btn-info"
        />
      </div>
    </div>
  );
}

export default Time;
