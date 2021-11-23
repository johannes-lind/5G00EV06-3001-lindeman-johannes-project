import React from "react";
import axios from "axios";
import Search from "./Search";
import "./components.css";
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
    let url = `/popular`; //`https://imdb-api.com/en/API/MostPopularMovies/${key}`;

    // function to change the url and send it to App-components
    const GetFilm = (id) => {
      url = `/find?i=${id}`; //`https://www.omdbapi.com/?i=${id}&apikey=${key2}`;
      this.props.set(url);
    };

    // parsing the data accordingly to arrays
    try {
      axios.get(url).then((res) => {
        const data = res.data;
        // arrays to hold the information needed
        const imgUrls = [];
        const images = [];
        const ids = [];
        const titles = [];
        // creating the components that will be shown on homepage
        // each image will also serve as a link to the search page of the film
        for (let i = 0; i < 15; i++) {
          imgUrls[i] = data.items[i].image;
          titles[i] = data.items[i].title;

          // Handling for titles that are so long that they mess up the view
          if (titles[i].length > 17) {
            titles[i] = titles[i].slice(0, 14);
            titles[i] = `${titles[i]}...`;
          }
          // console.log(data);
          ids[i] = data.items[i].id;
          images[i] = (
            <td>
              <Link to={"/Search"} onClick={() => GetFilm(ids[i])}>
                <img
                  key={data.items[i].id}
                  src={imgUrls[i]}
                  alt="poster"
                  width="200"
                  height="280"
                />
                <Route path="/Search">
                  <Search
                    URL={`/find?i=${ids[i]}`} 
                  />
                </Route>
              </Link>
              <p text-align="center">{titles[i]}</p>
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
        <header className="header"> TODAY'S MOST POPULAR FILMS </header>
        <table className="list"> {this.state.info}</table>
      </>
    );
  }
}
