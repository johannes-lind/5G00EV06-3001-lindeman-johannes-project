import React from "react";
import axios from "axios";
import Search from "./Search";
import "./components.css";
import AddToList from "./AddToList";
import {
  BrowserRouter as Router,
  Route,
  Link,
} from "react-router-dom";
export default class ComingSoon extends React.Component {
  state = {
    info: [],
    onList: [],
    toggle: true,
  };
// execute search function on mount
  componentDidMount(props) {
    this.search(props);
  }

// function to search and parse data, and set it to state
  async search(props) {
    let url = `/upcoming`; 

  // deliver new url to app.js
    const GetFilm = (id) => {
      url = `/find?i=${id}`; 
      this.props.set(url);
    };
    // using axios to get and parse fata from the url
    axios.get(url).then((res) => {
      const data = res.data;
      const imgUrls = [];
      const images = [];
      const titles = [];
      const ids = [];

      for (let i = 0; i < data.items.length; i++) {
        imgUrls[i] = data.items[i].image;
        titles[i] = data.items[i].title;
        // Handling for titles that are so long that they mess up the view
        if (titles[i].length > 17) {
          titles[i] = titles[i].slice(0, 15);
          titles[i] = `${titles[i]}...`;
        }
        ids[i] = data.items[i].id;
        // all images are also links to the given items search page
        images[i] = (
          <td>
            <Link to={"/Search"}>
              <img
                key={data.items[i].id}
                onClick={() => GetFilm(ids[i])}
                src={imgUrls[i]}
                alt="poster"
                width="200"
                height="280"
              />
              <Route path="/Search">
                <Search URL={`/find?i=${ids[i]}`} />
              </Route>
            </Link>
            <p text-align="center">
              {titles[i]}{" "}
              <button
                className="b"
                onClick={() => AddToList(ids[i], titles[i], imgUrls[i])}
              >
                +
              </button>
            </p>
          </td>
        );
      }
      // setting the posters in rows of 5
      let rows = [];
      for (let i = 0; i < images.length; i++) {
        if (i % 5 === 0) {
          rows.push(<tr>{}</tr>);
        }
        rows.push(images[i]);
      }
      //setting rows of content to state
      this.setState({
        info: [<table className="list">{rows}</table>],
      });
    });
  }

  render() {
    return (
      <>
        <header className="header" text-align="center">
          Coming Soon
        </header>
        <div>{this.state.info}</div>
      </>
    );
  }
}
