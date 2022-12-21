import React from "react";
import Weather from "./Weather"
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather/>
      <footer>
        This project was coded by Yvonne Imongan and is open-sourced {" "}
      <a href="https://github.com/Yvo-spks/react-weather-app" target="_blank" rel="noreferrer">

        open-sourced on GitHub

      </a>
      </footer>
      </div>
    </div>
  );
}


