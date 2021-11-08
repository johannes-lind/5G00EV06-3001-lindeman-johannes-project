import "./App.css";
import GetFilmInfo from "./components/GetFilmInfo";
import React from "react";
import Watchlist from "./components/Watchlist";
import ComingSoon from "./components/ComingSoon";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { render } from "@testing-library/react";
import GetHomePage from "./components/GetHomePage";
import Login from "./components/Login";
import GetTop25 from "./components/GetTop25";
const axios = require("axios");

function App() {
  let [film, setFilm] = React.useState("Pulp Fiction");
  var key = "3e5977f9";
  let [url, setUrl] = React.useState(
    `https://www.omdbapi.com/?t=${film}&apikey=${key}`
  );

  const GetFilm = () => {
    return <GetFilmInfo URL={url} />;
  };

  const change = () => {
    setUrl(`https://www.omdbapi.com/?t=${film}&apikey=${key}`);
    GetFilm();
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {/*  <Login /> */}
          <nav className="nav-link">
            <Link to={"/GetHomePage"} className="nav-link">
              {"   "}
              Home
            </Link>
            <> </>
            <Link to={"/GetFilmInfo"} className="nav-link">
              {"    "} Search
            </Link>
            <> </>
            <Link to={"/ComingSoon"} className="nav-link">
              {"    "} Coming Soon
            </Link>
            <> </>
            <Link to={"/GetTop25"} className="nav-link">
              {"    "}TOP25
            </Link>
            <Link to={"/Watchlist"} className="nav-link">
              {"    "} Watchlist
            </Link>
          </nav>
          <p>
            <Link to={"/GetFilmInfo"}>
              <button onClick={change}>search</button>
            </Link>
            <input
              type="text"
              placeholder="film"
              onChange={(e) => {
                setFilm(e.target.value);
              }}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  //setFilm(e.target.value);
                  change();
                }
              }}
            />
          </p>

          <Switch>
            <Route exact path="/GetHomePage">
              <GetHomePage set={setUrl} />
            </Route>
            <Route path="/GetFilmInfo">
              <GetFilmInfo URL={url} />
            </Route>
            <Route path="/ComingSoon">
              <ComingSoon set={setUrl} />{" "}
            </Route>
            <Route path="/GetTop25" component={GetTop25} />
            <Route path="/Watchlist">
              <Watchlist set={setUrl} />
            </Route>
            <Redirect to="/GetHomePage">
              <GetHomePage set={setUrl} />
            </Redirect>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
