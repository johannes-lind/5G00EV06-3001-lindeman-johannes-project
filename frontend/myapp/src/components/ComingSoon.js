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

  componentDidMount(props) {
    this.search(props);
  }

  async search(props) {
    let url = `/upcoming`; //`https://imdb-api.com/en/API/ComingSoon/${key}`;

    const GetFilm = (id) => {
      change(id);
      console.log(id);
    };
    // if user add's item to watchlist, the button will stop showing and will show ✅ instead
    const added = () => {
      this.setState({ toggle: false });
    };

    const change = (id) => {
      url = `/find?i=${id}`; // `https://www.omdbapi.com/?i=${id}&apikey=${key2}`;
      this.props.set(url);
      // return <Search URL={url} />;
    };
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
                <Search
                  URL={`/find?i=${ids[i]}`} //`https://www.omdbapi.com/?i=${ids[i]}&apikey=${key2}`}
                />
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
      let rows = [];
      for (let i = 0; i < images.length; i++) {
        if (i % 5 === 0) {
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
        <header className="header" text-align="center">
          Coming Soon
        </header>
        <div>{this.state.info}</div>
      </>
    );
  }
}
