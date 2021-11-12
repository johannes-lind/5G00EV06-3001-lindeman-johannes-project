import React from "react";
import Search from "./Search";
import "./components.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export default class Watchlist extends React.Component {
  state = {
    posters: [],
  };

  componentDidMount() {
    // if persistent storage holds data for watchlist, the watchlist is set
    // otherwise only text "empty list" will be shown
    try {
      let ids = JSON.parse(localStorage.getItem("ids"));
      let titles = JSON.parse(localStorage.getItem("titles"));
      let images = JSON.parse(localStorage.getItem("images"));
      console.log(ids);
      console.log(images);
      this.setState({ names: ids });
      this.setter(ids, titles, images);
    } catch (error) {
      console.log(error);
      this.setState({ posters: <p> List empty </p> });
    }
  }

  // function to clear the whole watchlist
  ClearList = () => {
    localStorage.clear();
    this.setState({ posters: <p> </p> });
  };

  // function to change the url in the App-component
  change = (id) => {
    let key2 = "3e5977f9";
    let url = `https://www.omdbapi.com/?i=${id}&apikey=${key2}`;
    this.props.set(url);
  };

  // function to remove individual films from the list
  remove = (film, image) => {
    let ids = JSON.parse(localStorage.getItem("ids"));
    let titles = JSON.parse(localStorage.getItem("titles"));
    let images = JSON.parse(localStorage.getItem("images"));
    let newIds = [];
    let newTitles = [];
    let newImages = [];
    for (let i = 0; i < ids.length; i++) {
      if (ids[i] !== film) {
        newIds.push(ids[i]);
        newTitles.push(titles[i]);
        newImages.push(images[i]);
      }
    }
    localStorage.setItem("ids", JSON.stringify(newIds));
    localStorage.setItem("titles", JSON.stringify(newTitles));
    localStorage.setItem("images", JSON.stringify(newImages));
    console.log(newIds);
    this.setter(newIds, newTitles, newImages);
  };

  // setting up the component according to the title and image it receives as parameter
  // images will once again serve as links to film's page
  setter = (id, title, img) => {
    let key2 = "3e5977f9";
    const images = [];

    for (let i = 0; i < img.length; i++) {
      images[i] = (
        <td>
          <Link
            to={"/Search"}
            className="nav-link"
            onClick={() => this.change(id[i])}
          >
            <img
              key={i}
              src={img[i]}
              alt="poster"
              width="200"
              height="280"
              onClick={() => {
                <Search
                  URL={`https://www.omdbapi.com/?i=${id[i]}&apikey=${key2}`}
                />;
              }}
            />
            <Route path="/Search">
              <Search
                URL={`https://www.omdbapi.com/?i=${id[i]}&apikey=${key2}`}
              />
            </Route>
          </Link>
          <p className="list">
            {title[i]}
            <p>
              <button className="b" onClick={() => this.remove(id[i], img[i])}>
                Delete
              </button>
            </p>
          </p>
        </td>
      );
    }
    // creating a table if the watchlist is longer than 5
    if (img.length < 6) {
      this.setState({ posters: [<table>{images}</table>] });
    } else {
      let rows = [];
      for (let i = 0; i < img.length; i++) {
        if (i % 5 === 0) {
          rows.push(<tr>{}</tr>);
        }
        rows.push(images[i]);
      }
      this.setState({ posters: [<table>{rows}</table>] });
    }
  };

  render() {
    return (
      <div className="posters">
        <button className="b" onClick={() => this.ClearList()}>
          Clear List
        </button>
        {this.state.posters}
      </div>
    );
  }
}
