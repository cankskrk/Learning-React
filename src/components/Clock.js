import React, { useEffect, useState } from "react";

function Clock({ margin, fontSize, color, fontFamily }) {
  const [clockState, setClockState] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    }, 1000);
  }, []);

  // Custom Style
  const customStyle = {
    color: "",
  };

  // Greeting Logic
  let greeting;
  const h = new Date().getHours();
  if (h < 12) {
    greeting = "Good Morning!";
    customStyle.color = "red";
  } else if (h < 18) {
    greeting = "Good Afternoon!";
    customStyle.color = "green";
  } else {
    greeting = "Good Night!";
    customStyle.color = "blue";
  }

  return (
    <div>
      <div style={{ margin: "4rem 4rem 0 4rem", fontFamily: "monospace" }}>
        <h1 style={customStyle}>{greeting}</h1>
      </div>
      <div
        style={{
          margin: `${margin}rem`,
          fontSize: `${fontSize}rem`,
          color: `${color}`,
          fontFamily: `${fontFamily}`,
        }}
      >
        {clockState}
      </div>
    </div>
  );
}

export default Clock;
