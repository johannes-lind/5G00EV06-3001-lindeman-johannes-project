import React from "react";
import GetFilmInfo from "./GetFilmInfo";
import "./components.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export default class Watchlist extends React.Component {
  state = {
    posters: [],
  };
  componentDidMount() {
    try {
      let titles = JSON.parse(localStorage.getItem("titles"));
      let images = JSON.parse(localStorage.getItem("images"));
      console.log(titles);
      console.log(images);
      this.setState({ names: titles });
      this.setter(titles, images);
    } catch (error) {
      console.log(error);
      this.setState({ posters: <p> List empty </p> });
    }
  }

  ClearList = () => {
    localStorage.clear();
    this.setState({ posters: <p> </p> });
  };

  change = (name) => {
    let key2 = "3e5977f9";
    console.log(name);
    let url = `https://www.omdbapi.com/?t=${name}&apikey=${key2}`;
    this.props.set(url);
  };

  setter = (ttl, img) => {
    let key2 = "3e5977f9";
    const images = [];

    for (let i = 0; i < img.length; i++) {
      images[i] = (
        <>
          <td>
            {" "}
            <Link
              to={"/GetFilmInfo"}
              className="nav-link"
              onClick={() => this.change(ttl[i])}
            >
              <img
                key={i}
                src={img[i]}
                alt="poster"
                width="200"
                height="280"
                onClick={() => {
                  <GetFilmInfo
                    URL={`https://www.omdbapi.com/?t=${ttl[i]}&apikey=${key2}`}
                  />;
                }}
              />
              <Route path="/GetFilmInfo">
                <GetFilmInfo
                  URL={`https://www.omdbapi.com/?t=${ttl[i]}&apikey=${key2}`}
                />
              </Route>
            </Link>
            <p className="list">
              <small>{ttl[i]}</small>{" "}
            </p>
          </td>
        </>
      );
    }
    this.setState({ posters: [images] });
  };

  render() {
    return (
      <p>
        <button onClick={() => this.ClearList()}>Clear List</button>
        <p></p>
        <tr> {this.state.posters}</tr>
      </p>
    );
  }
}
