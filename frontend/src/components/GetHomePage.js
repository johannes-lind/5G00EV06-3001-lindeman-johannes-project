import React from "react";
import axios from "axios";
export default class GetHomePage extends React.Component {
  state = {
    info: [],
  };

  componentDidMount() {
    this.search();
  }

  async search() {
    let key = "k_nb1tky3v";
    let url = `https://imdb-api.com/en/API/MostPopularMovies/${key}`;
    axios.get(url).then((res) => {
      const data = res.data;
      const images = [];
      console.log(data);
      console.log(data.items[0].fullTitle);
      console.log(data.items[0]);
      for (let i = 0; i < 10; i++) {
        images[i] = data.items[i].image;
      }
      let top = data.items[0].fullTitle;
      this.setState({
        info: [
          <img src={images[0]} alt="poster" width="150" height="200" />,
          <img src={images[1]} alt="poster" width="150" height="200" />,
          <img src={images[2]} alt="poster" width="150" height="200" />,
          <img src={images[3]} alt="poster" width="150" height="200" />,
          <img src={images[4]} alt="poster" width="150" height="200" />,
          <p></p>,
          <img src={images[5]} alt="poster" width="150" height="200" />,
          <img src={images[6]} alt="poster" width="150" height="200" />,
          <img src={images[7]} alt="poster" width="150" height="200" />,
          <img src={images[8]} alt="poster" width="150" height="200" />,
          <img src={images[9]} alt="poster" width="150" height="200" />,
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
