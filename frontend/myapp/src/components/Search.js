import React from "react";
import axios from "axios";
import AddToList from "./AddToList";
import "./components.css";

export default class Search extends React.Component {
  //_isMounted = false;
  // state components to hold and deliver information to other React components
  state = {
    info: [],
    name: " ",
    ratings: [],
    onList: [],
    id: " ",
  };
  // when component is mounted, it will run a search
  // error handling for no results included
  componentDidMount(props) {
    // clearing the checkmark with new searches
    this.setState({ onList: [] });
    // this._isMounted = true;
    try {
      this.search();
    } catch (error) {
      this.setState({
        info: (
          <p>
            <em>No results found </em>
          </p>
        ),
      });
      console.log(error);
    }
  }

  //when new URL is set, a new search will be run
  // error handling for no results included
  componentDidUpdate(nextProps, nextState) {
    try {
      // checking if the search url is changed to prevent infinite loop
      if (nextProps.URL !== this.props.URL) {
        this.search();
        this.setState({
          onList: [<></>],
        });
      }
    } catch (error) {
      this.setState({ info: <p> No results found </p> });
      console.log(error);
    }
  }
  // letting it show when "add to watchlist" is clicked and the film is added to list
  added = () => {
    // alert("Added to watchlist");
    this.setState({
      onList: [<>🗹</>],
    });
    this.search();
  };
  // search function including data parsing and setting up component for render
  // error handling included if no ratings for the film are available (which is very frequent)
  search = async () => {
    await axios.get(this.props.URL).then((res) => {
      const data = res.data;
      const image = data.Poster;
      if (data.Response === "False") {
        this.setState({ info: [<p> Not found </p>] });
      } else {
        this.setState({
          info: [
            <div>
              <h2>
                <p className="header">
                  {data.Title} ({data.Year})
                  <p>
                    <button
                      className="b"
                      onClick={() => (
                        AddToList(this.state.id, this.state.name, image),
                        this.added()
                      )}
                    >
                      Add to Watchlist
                    </button>
                    {this.state.onList}
                  </p>
                </p>
                <img
                  align="left"
                  key="0"
                  src={image}
                  alt="poster"
                  width="300"
                  height="420"
                />
              </h2>
              <div className="infoarticle">
                <p>Rated: {data.Rated}</p>
                <p>Runtime: {data.Runtime}</p>
                <p>Starring: {data.Actors}</p>
                <p>Directed by: {data.Director}</p>
                <p>Writer: {data.Writer}</p>
                <p>Box Office: {data.BoxOffice}</p>
                <p>
                  <em>{data.Plot}</em>
                </p>
                <p>Awards: {data.Awards}</p>
              </div>
            </div>,
          ],
          name: data.Title,
          id: data.imdbID,
        });

        try {
          const rating1 = [data.Ratings[0].Source, data.Ratings[0].Value];
          const rating2 = [data.Ratings[1].Source, data.Ratings[1].Value];
          const rating3 = [data.Ratings[2].Source, data.Ratings[2].Value];
          this.setState({
            ratings: [
              <ul>
                <li>
                  {rating1[0]}: {rating1[1]}
                </li>

                <li>
                  {rating2[0]}: {rating2[1]}
                </li>

                <li>
                  {rating3[0]}: {rating3[1]}
                </li>
              </ul>,
            ],
          });
        } catch (error) {
          this.setState({
            ratings: [
              <p>
                <em>Ratings not available</em>
              </p>,
            ],
          });
        }
      }
    });
  };

  render() {
    return (
      <div>
        <table>{this.state.info} </table>
        <p className="ratings"> RATINGS {this.state.ratings}</p>
      </div>
    );
  }
}
