import React, { Component } from "react";
import "./App.css";

const PLACES = [
  { name: "Palo Alto", zip: "94303" },
  { name: "San Jose", zip: "94088" },
  { name: "Santa Cruz", zip: "95062" },
  { name: "Honolulu", zip: "96803" }
];

class WeatherDisplay extends Component {
  render() {
    return <h1>Displaying weather for city {this.props.zip}</h1>;
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        {PLACES.map((place, index) => (
          <button
            key={index}
            onClick={() => {
              console.log("Clicked index " + index);
            }}
          >
            {place.name}
          </button>
        ))}
        <WeatherDisplay zip={"12345"} />
      </div>
    );
  }
}

export default App;
