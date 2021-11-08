import React from "react";
import axios from "axios";
import GetFilmInfo from "./GetFilmInfo";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { render } from "@testing-library/react";
export default class GetHomePage extends React.Component {
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

  async search(props) {
    let key = "k_nb1tky3v";
    let url = `https://imdb-api.com/en/API/MostPopularMovies/${key}`;
    var key2 = "3e5977f9";

    const GetFilm = (name) => {
      url = `https://www.omdbapi.com/?t=${name}&apikey=${key2}`;
      this.props.set(url);
      console.log(name);
    };

    axios.get(url).then((res) => {
      const data = res.data;
      const imgUrls = [];
      const images = [];
      const titles = [];
      console.log(data);
      for (let i = 0; i < 15; i++) {
        imgUrls[i] = data.items[i].image;
        titles[i] = data.items[i].title;
        images[i] = (
          <td>
            <>
              <Link to={"/GetFilmInfo"} onClick={() => GetFilm(titles[i])}>
                <img
                  key={data.items[i].id}
                  src={imgUrls[i]}
                  alt="poster"
                  width="150"
                  height="200"
                />
                <Route path="/GetFilmInfo">
                  <GetFilmInfo
                    URL={`https://www.omdbapi.com/?t=${titles[i]}&apikey=${key2}`}
                  />
                </Route>
              </Link>
              <p className="list">
                <small> {titles[i]}</small>{" "}
              </p>
            </>
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
          <p> </p>,
          images[5],
          images[6],
          images[7],
          images[8],
          images[9],
          <p> </p>,
          images[10],
          images[11],
          images[12],
          images[13],
          images[14],
        ],
      });
    });
  }

  render() {
    return (
      <>
        <header>Most popular films </header>
        <p> {this.state.info}</p>
      </>
    );
  }
}
