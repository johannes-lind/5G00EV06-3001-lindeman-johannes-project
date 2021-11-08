import React from "react";
import axios from "axios";
export default class GetTop25 extends React.Component {
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
      const imgUrls = [];
      const images = [];
      console.log(data);
      console.log(data.items[0].fullTitle);
      console.log(data.items[0]);
      for (let i = 0; i < 25; i++) {
        imgUrls[i] = data.items[i].image;
        images[i] = (
          <img
            key={i}
            src={imgUrls[i]}
            alt="poster"
            width="100"
            height="150"
            //  onClick={<ShowInfo film={data.items[0]} />}
          />
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
          <p> </p>,
          images[15],
          images[16],
          images[17],
          images[18],
          images[19],
          <p> </p>,
          images[20],
          images[21],
          images[22],
          images[23],
          images[24],
        ],
      });
    });
  }

  render() {
    return (
      <>
        <header>TODAY'S TOP 25 FILMS </header>
        <p> {this.state.info}</p>
      </>
    );
  }
}
