import React from "react";
import axios from "axios";
import Search from "./Search";
import AddToList from "./AddToList";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
export default class Hot100 extends React.Component {
  state = {
    info: [],
  };
  // Performing the search function on mount to get, handle and display data
  componentDidMount() {
    this.search();
  }

  async search() {
    let url = `/popular`;
    const GetFilm = (id) => {
      change(id);
      console.log(id);
    };

    // setting and sending url to app.js, which delivers it to Search.js as props
    const change = (id) => {
      url = `/find?i=${id}&plot=full`; // `https://www.omdbapi.com/?i=${id}&apikey=${key2}`;
      this.props.set(url);
    };
    axios.get(url).then((res) => {
      const data = res.data;
      // arrays to hold the information needed
      const imgUrls = [];
      const images = [];
      const titles = [];
      const ids = [];
      for (let i = 0; i < 100; i++) {
        imgUrls[i] = data.items[i].image;
        titles[i] = data.items[i].title;
        // Handling for titles that are so long that they mess up the view
        if (titles[i].length > 15) {
          titles[i] = titles[i].slice(0, 12);
          titles[i] = `${titles[i]}...`;
        }
        ids[i] = data.items[i].id;
        images[i] = (
          <td>
            <>
              <Link to={"/Search"}>
                <img
                  key={i}
                  onClick={() => GetFilm(ids[i])}
                  src={imgUrls[i]}
                  alt="poster"
                  width="160"
                  height="225"
                />
                <Route path="/Search">
                  <Search
                    URL={`/find?i=${ids[i]}&plot=full`} //`https://www.omdbapi.com/?i=${ids[i]}&apikey=${key2}`}
                  />
                </Route>
              </Link>
              <p text-align="center">
                {[i + 1]}. {titles[i]}{" "}
                <button
                  className="b"
                  onClick={() => AddToList(ids[i], titles[i], imgUrls[i])}
                >
                  +
                </button>
              </p>
            </>
          </td>
        );
      }
      let rows = [];
      for (let i = 0; i < images.length; i++) {
        if (i % 5 === 0) {
          rows.push(<tr>{}</tr>);
        }
        rows.push(images[i]);
      }
      this.setState({
        info: [<table className="toplist">{rows}</table>],
      });
    });
  }

  render() {
    return (
      <>
        <header className="header" text-align="center">
          TODAY'S 100 MOST POPULAR FILMS
        </header>
        <div className="posters"> {this.state.info}</div>
      </>
    );
  }
}
