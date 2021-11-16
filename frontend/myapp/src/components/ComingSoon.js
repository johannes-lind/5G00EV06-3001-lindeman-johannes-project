import React from "react";
import axios from "axios";
import Search from "./Search";
import "./components.css";
import AddToList from "./AddToList";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { render } from "@testing-library/react";
export default class ComingSoon extends React.Component {
  state = {
    info: [],
  };

  componentDidMount(props) {
    this.search(props);
  }

  async search(props) {
    let url = `/api2`; //`https://imdb-api.com/en/API/ComingSoon/${key}`;

    const GetFilm = (id) => {
      change(id);
      console.log(id);
    };

    const change = (id) => {
      url = `/api1?i=${id}`; // `https://www.omdbapi.com/?i=${id}&apikey=${key2}`;
      this.props.set(url);
      // return <Search URL={url} />;
    };
    axios.get(url).then((res) => {
      const data = res.data;
      const imgUrls = [];
      const images = [];
      const titles = [];
      const ids = [];
      console.log(data.items.length);
      console.log(data);
      for (let i = 0; i < data.items.length; i++) {
        imgUrls[i] = data.items[i].image;
        titles[i] = data.items[i].title;
        // Handling for titles that are so long that they mess up the view
        if (titles[i].length > 17) {
          titles[i] = titles[i].slice(0, 14);
          titles[i] = `${titles[i]}...`;
        }
        ids[i] = data.items[i].id;
        images[i] = (
          <td>
            <Link to={"/Search"}>
              <img
                key={data.items[i].id}
                onClick={() => GetFilm(ids[i])}
                src={imgUrls[i]}
                alt="poster"
                width="170"
                height="230"
              />
              <Route path="/Search">
                <Search
                  URL={`/api1?i=${ids[i]}`} //`https://www.omdbapi.com/?i=${ids[i]}&apikey=${key2}`}
                />
              </Route>
            </Link>
            <p text-align="center">{titles[i]}</p>
            <p>
              <button
                className="b"
                onClick={() => AddToList(ids[i], titles[i], imgUrls[i])}
              >
                Add to Watchlist
              </button>
            </p>
          </td>
        );
      }
      let rows = [];
      for (let i = 0; i < images.length; i++) {
        if (i % 4 === 0) {
          rows.push(<tr>{}</tr>);
        }
        rows.push(images[i]);
      }
      this.setState({
        info: [<table className="list">{rows}</table>],
      });
    });
  }

  render() {
    return (
      <>
        {" "}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <header className="header" text-align="center">
          Coming Soon
        </header>
        <div className="posters">{this.state.info}</div>
      </>
    );
  }
}
