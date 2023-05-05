import React from "react";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app">
          <div className="weather-border">
          <Weather />
          </div>
          <small>
            <a href="https://github.com/Folesia/weather-app">
              Open-source code
            </a>
            by Olesia Fatenko
          </small>
        </div>
      </div>
    </div>
  );
}

export default App;
