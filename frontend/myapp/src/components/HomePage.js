import React from "react";
import axios from "axios";
import Search from "./Search";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default class HomePage extends React.Component {
  state = {
    info: [],
  };

  componentDidMount(props) {
    try {
      this.search(props);
    } catch (error) {
      this.setState({ info: <p> </p> });
      console.log(error);
    }
  }

  // function to search film from API
  async search(props) {
    let key = "k_nb1tky3v";
    let url = `https://imdb-api.com/en/API/MostPopularMovies/${key}`;
    var key2 = "3e5977f9";

    // function to change the url and send it to App-components
    const GetFilm = (id) => {
      url = `https://www.omdbapi.com/?i=${id}&apikey=${key2}`;
      this.props.set(url);
    };

    // parsing the data accordingly to arrays
    try {
      axios.get(url).then((res) => {
        const data = res.data;
        const imgUrls = [];
        const images = [];
        const ids = [];
        const titles = [];
        // creating the components that will be shown on homepage
        // each image will also serve as a link to the search page of the film
        for (let i = 0; i < 15; i++) {
          imgUrls[i] = data.items[i].image;
          titles[i] = data.items[i].title;
          console.log(data);
          ids[i] = data.items[i].id;
          images[i] = (
            <td>
              <Link to={"/Search"} onClick={() => GetFilm(ids[i])}>
                <img
                  key={data.items[i].id}
                  src={imgUrls[i]}
                  alt="poster"
                  width="150"
                  height="210"
                />
                <Route path="/Search">
                  <Search
                    URL={`https://www.omdbapi.com/?i=${ids[i]}&apikey=${key2}`}
                  />
                </Route>
              </Link>
              <p className="list">{titles[i]}</p>
            </td>
          );
        }
        this.setState({
          info: [
            images[0],
            images[1],
            images[2],
            images[3],
            images[4],
            <tr></tr>,
            images[5],
            images[6],
            images[7],
            images[8],
            images[9],
            <tr></tr>,
            images[10],
            images[11],
            images[12],
            images[13],
            images[14],
          ],
        });
      });
    } catch (error) {
      // in case the number of API-requests is exceeded
      this.setState({ info: <p> Request limit exceeded! </p> });
    }
  }

  render() {
    return (
      <>
        <header className="header">Most popular films </header>
        <table className="list"> {this.state.info}</table>
      </>
    );
  }
}
