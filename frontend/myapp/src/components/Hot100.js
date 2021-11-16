import React from "react";
import axios from "axios";
import Search from "./Search";
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

  componentDidMount() {
    this.search();
  }

  async search() {
    let url = `/api3`;
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
      for (let i = 0; i < 100; i++) {
        imgUrls[i] = data.items[i].image;
        titles[i] = data.items[i].title;
        // Handling for titles that are so long that they mess up the view
        if (titles[i].length > 17) {
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
                  width="150"
                  height="200"
                />
                <Route path="/Search">
                  <Search
                    URL={`/api1?i=${ids[i]}`} //`https://www.omdbapi.com/?i=${ids[i]}&apikey=${key2}`}
                  />
                </Route>
              </Link>
              <p text-align="center">
                {[i + 1]}. {titles[i]}
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
