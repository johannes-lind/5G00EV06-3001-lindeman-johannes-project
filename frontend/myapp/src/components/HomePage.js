import React from "react";
import axios from "axios";
import Search from "./Search";
import "./components.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export default class HomePage extends React.Component {
  state = {
    filminfo: [],
    tvinfo: [],
  };

  componentDidMount(props) {
    try {
      this.searchfilm(props);
      this.searchtv(props);
    } catch (error) {
      this.setState({ filminfo: <p> </p> });
      this.setState({ tvinfo: <p> </p> });
      console.log(error);
    }
  }

  // function to search film from API
  async searchfilm(props) {
    let url = `/popular`;

    // function to change the url and send it to App-components
    const GetFilm = (id) => {
      url = `/find?i=${id}`;
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
                  <Search URL={`/find?i=${ids[i]}`} />
                </Route>
              </Link>
              <p text-align="center">{titles[i]}</p>
            </td>
          );
        }
        // Setting the images in a table with rows of 5
        let filmrows = [];
        for (let i = 0; i < images.length; i++) {
          if (i % 5 === 0) {
            filmrows.push(<tr>{}</tr>);
          }
          filmrows.push(images[i]);
        }
        this.setState({
          filminfo: [<table className="toplist">{filmrows}</table>],
        });
      });
    } catch (error) {
      // in case the number of API-requests is exceeded
      this.setState({ filminfo: <p> Request limit exceeded! </p> });
    }
  }

  // Function to get 15 most popular tv shows for the homepage
  async searchtv() {
    let url = `/popularTV`;

    // setting and sending url to app.js, which delivers it to Search.js as props
    const GetFilm = (id) => {
      url = `/find?i=${id}&plot=full`; // `https://www.omdbapi.com/?i=${id}&apikey=${key2}`;
      this.props.set(url);
    };
    try {
      axios.get(url).then((res) => {
        const data = res.data;
        // arrays to hold the information needed
        const imgUrls = [];
        const images = [];
        const titles = [];
        const ids = [];
        for (let i = 0; i < 15; i++) {
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
              <>
                <Link to={"/Search"}>
                  <img
                    key={i}
                    onClick={() => GetFilm(ids[i])}
                    src={imgUrls[i]}
                    alt="poster"
                    width="200"
                    height="280"
                  />
                  <Route path="/Search">
                    <Search URL={`/find?i=${ids[i]}&plot=full`} />
                  </Route>
                </Link>
                <p text-align="center">{titles[i]} </p>
              </>
            </td>
          );
        }
        // Setting the images in a table with rows of 5
        let tvrows = [];
        for (let i = 0; i < images.length; i++) {
          if (i % 5 === 0) {
            tvrows.push(<tr>{}</tr>);
          }
          tvrows.push(images[i]);
        }
        this.setState({
          tvinfo: [<table className="list">{tvrows}</table>],
        });
      });
    } catch (error) {
      // in case the number of API-requests is exceeded
      this.setState({ tvinfo: <p> Request limit exceeded! </p> });
    }
  }
  // Displaying the content
  render() {
    return (
      <>
        <header className="header"> FILM SUGGESTIONS </header>
        <table className="list"> {this.state.filminfo}</table>
        <header className="header"> TV SUGGESTIONS </header>
        <table className="list"> {this.state.tvinfo}</table>
      </>
    );
  }
}
