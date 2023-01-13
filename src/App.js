// CSS Files
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

// Components
import Msg from "./components/Msg";
import Clock from "./components/Clock";
import Card from "./components/Card";
import Login from "./components/Login";
import Register from "./components/Register";
import Counter from "./components/Counter";
import Time from "./components/Time";

// Objects Files
import cars from "./components/ObjectsFile/car";
const [honda, tesla] = cars;
const {
  speedStats: { topSpeed: hondaTopSpeed },
} = honda;

const {
  speedStats: { topSpeed: teslaTopSpeed },
} = tesla;

const {
  coloursByPopularity: [hondaTopColour],
} = honda;

const {
  coloursByPopularity: [teslaTopColour],
} = tesla;

// Endpoints
const img = "https://picsum.photos/200";
const img2 = "https://picsum.photos/";
const img2_style = {
  border: "0.25rem solid black",
  boxShadow: "4rem 4rem 1rem darkgrey",
  margin: "2rem",
};

// Main Function
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

      <Counter />
      <Time />

      <div className="m-5 p-5">
        <table class="table table-striped table-dark border border-2 border-warning">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Brand</th>
              <th scope="col">Top Speed</th>
              <th scope="col">Top Colour</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>{tesla.model}</td>
              <td>{teslaTopSpeed}</td>
              <td>{teslaTopColour}</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>{honda.model}</td>
              <td>{hondaTopSpeed}</td>
              <td>{hondaTopColour}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
