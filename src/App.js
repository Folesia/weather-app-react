import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Winnipeg" />

        <footer>
          <a
            href="https://github.com/Folesia/weather-app-react"
            target="_blank"
          >
            Open-source code{" "}
          </a>
          by Olesia Fatenko
        </footer>
      </div>
    </div>
  );
}

