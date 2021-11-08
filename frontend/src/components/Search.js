import React from "react";
import axios from "axios";
import GetFilmInfo from "./components/GetFilmInfo";

export default function Search() {
  let [film, setFilm] = React.useState("Dumbo");
  var key = "3e5977f9";
  let [url, setUrl] = React.useState(
    `http://www.omdbapi.com/?t=${film}&apikey=${key}`
  );

  const GetFilm = () => {
    return <GetFilmInfo URL={url} />;
  };

  const change = () => {
    setUrl(`http://www.omdbapi.com/?t=${film}&apikey=${key}`);
  };

  return (
    <>
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
      <GetFilm />
    </>
  );
}
