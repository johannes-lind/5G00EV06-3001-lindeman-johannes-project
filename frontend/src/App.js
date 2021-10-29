import logo from "./logo.svg";
import "./App.css";
import GetFilmInfo from "./components/GetFilmInfo";
import React from "react";
import { render } from "@testing-library/react";
import GetHomePage from "./components/GetHomePage";
const axios = require("axios");

function App() {
  let [film, setFilm] = React.useState("Dumbo");
  var key = "3e5977f9";
  let [url, setUrl] = React.useState(
    `https://www.omdbapi.com/?t=${film}&apikey=${key}`
  );

  const GetFilm = () => {
    return <GetFilmInfo URL={url} />;
  };

  const change = () => {
    setUrl(`https://www.omdbapi.com/?t=${film}&apikey=${key}`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <button onClick={change}>search</button>
          <input
            type="text"
            placeholder="film"
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                setFilm(e.target.value);
                change();
              }
            }}
          />
        </p>
        <GetHomePage />
        <GetFilm />
      </header>
    </div>
  );
}

export default App;
