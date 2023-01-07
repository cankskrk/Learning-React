import React from "react";

function Msg() {
  //   useEffect(() => {
  //     console.log("Rendered!");
  //   });

  // let name = prompt("What is your name?");
  let name = "Arda";
  // let luckyNumber = prompt("What is your lucky number?");
  let luckyNumber = 9;

  return (
    <div>
      <h1 className="heading">Hello {name}</h1>
      <p>Your lucky number is {luckyNumber}</p>
    </div>
  );
}

// Div elementi yerine "<> </>" bos element gönderebiliriz. (Fragment)

export default Msg;
