import React from "react";
import axios from "axios";
import AddToList from "./AddToList";

export default class GetFilmInfo extends React.Component {
  _isMounted = false;
  state = {
    info: [],
    name: " ",
    ratings: [],
  };

  componentDidMount() {
    this._isMounted = true;
    try {
      this.search();
    } catch (error) {
      this.setState({ info: <p> No results found </p> });
      console.log(error);
    }
  }

  componentDidUpdate(nextProps, nextState) {
    try {
      if (nextState.info !== this.state.info) {
        this.search();
      }
    } catch (error) {
      this.setState({ info: <p> No results found </p> });
      console.log(error);
    }
  }

  async search() {
    axios.get(this.props.URL).then((res) => {
      const data = res.data;
      const image = data.Poster;

      if (this._isMounted) {
        this.setState({
          info: [
            <>
              <img key="0" src={image} alt="poster" width="250" height="350" />
              <p key="1">
                {data.Title} ({data.Year})<p></p>
                <button onClick={() => AddToList(this.state.name, image)}>
                  Add to Watchlist
                </button>
              </p>
            </>,
            <p key="2">Rated: {data.Rated}</p>,
            <p key="3">Starring: {data.Actors}</p>,
            <p key="4">Directed by: {data.Director}</p>,
            <p key="6">Writer: {data.Writer}</p>,
            <p key="5">
              <em>{data.Plot}</em>
            </p>,
          ],
          name: data.Title,
        });
        try {
          const rating1 = [data.Ratings[0].Source, data.Ratings[0].Value];
          const rating2 = [data.Ratings[1].Source, data.Ratings[1].Value];
          const rating3 = [data.Ratings[2].Source, data.Ratings[2].Value];
          this.setState({
            ratings: [
              <>
                <>
                  <p key="7">
                    {rating1[0]}, {rating1[1]}{" "}
                  </p>
                  <p key="8">
                    {rating2[0]}, {rating2[1]}
                  </p>
                </>
                <p key="9">
                  {rating3[0]}, {rating3[1]}
                </p>
              </>,
            ],
          });
        } catch (error) {
          this.setState({
            ratings: [
              <p>
                <em>Ratings not available</em>{" "}
              </p>,
            ],
          });
        }
      }
    });
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  render() {
    return (
      <>
        <p>{this.state.info}</p>
        <p>Ratings: {this.state.ratings}</p>
      </>
    );
  }
}
