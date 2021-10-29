import React from "react";
import axios from "axios";
export default class GetFilmInfo extends React.Component {
  state = {
    info: [],
  };

  componentDidMount() {
    this.search();
  }

  async search() {
    
    axios.get(this.props.URL).then((res) => {
      const data = res.data;
      const image = data.Poster;
      console.log(image);
      console.log(data);
      this.setState({
        info: [
          <>
            <img src={image} alt="poster" width="300" height="450" />
            <p key="0">
              {data.Title} ({data.Year})
            </p>
          </>,
          <p key="2">Rated: {data.Rated}</p>,
          <p key="3">Starring: {data.Actors}</p>,
          <p key="4">Directed by: {data.Director}</p>,
          <p key="5">{data.Plot}</p>,
        ],
      });
    });
  }

  render() {
    return <ul>{this.state.info}</ul>;
  }
}
