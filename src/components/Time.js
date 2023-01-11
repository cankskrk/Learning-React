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
      <h1>{time}</h1>
      <Button
        name="Get Time"
        type="button"
        func={getTime}
        className="btn-info"
      />
    </div>
  );
}

export default Time;
