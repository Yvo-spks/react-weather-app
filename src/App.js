import React from "react";
import Weather from "./Weather"
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Dortmund" />
        <footer>
          Designed and coded by Yvonne Imongan and{" "}
          <a
            href="https://github.com/Yvo-spks/react-weather-app"
            target="_blank"
            rel="noreferrer"
            className="links"
          >
            open-sourced on GitHub
          </a>{" "}
         
          and{" "}
          <a
            href="https://storied-belekoy-bdfd25.netlify.app"
            target="_blank"
            rel="noreferrer"
            className="links"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}


