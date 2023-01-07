import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import Msg from "./components/Msg";
import Clock from "./components/Clock";
import Card from "./components/Card";
import Login from "./components/Login";
import Register from "./components/Register";

const img = "https://picsum.photos/200";
const img2 = "https://picsum.photos/";
const img2_style = {
  border: "0.25rem solid black",
  boxShadow: "4rem 4rem 1rem darkgrey",
  margin: "2rem",
};

function App() {
  // let isLoggedIn = false;
  let userIsRegistered = false;
  // let currentTime = new Date().getHours();

  return (
    <div className="App">
      <Msg />
      <img src={img + "?grayscale"} alt="Lorem Picsum" />
      <div>
        <img style={img2_style} src={img2 + "400"} alt="Lorem Picsum" />
      </div>
      <Clock
        margin={4}
        fontSize={4}
        color={"rebeccapurple"}
        fontFamily={"monospace"}
      />
      <Card
        pokemonIndex={24}
        name={"Arbok"}
        description={
          "The frightening patterns on its belly have been studied. Six variations have been confirmed."
        }
      />
      <Card
        pokemonIndex={87}
        name={"Dewgong"}
        description={
          "Its entire body is a snowy white. Unharmed by even intense cold, it swims powerfully in icy waters."
        }
      />

      {userIsRegistered ? <Login /> : <Register />}

      {/* {isLoggedIn && <Login />}
      {currentTime > 15 && <h3>Why you are still working?</h3>} */}
    </div>
  );
}

export default App;
