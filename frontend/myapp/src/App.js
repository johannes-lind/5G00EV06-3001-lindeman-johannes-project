import "./App.css";
import Search from "./components/Search";
import React from "react";
import Watchlist from "./components/Watchlist";
import ComingSoon from "./components/ComingSoon";
import "./components/components.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { render } from "@testing-library/react";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import GetTop25 from "./components/GetTop25";
const axios = require("axios");

function App() {
  let [film, setFilm] = React.useState("Pulp Fiction");
  var key = "3e5977f9";
  let [url, setUrl] = React.useState(
    `https://www.omdbapi.com/?t=${film}&apikey=${key}`
  );

  // sending the url to Search -component
  const GetFilm = () => {
    return <Search URL={url} />;
  };
  //changing the url based on input
  const change = () => {
    setUrl(`https://www.omdbapi.com/?t=${film}&apikey=${key}`);
    GetFilm();
  };

  return (
    <Router>
      <body>
        <div className="App">
          <header className="App-header">
            {/*  <Login /> */}
            <nav className="nav-link">
              <Link to={"/HomePage"} className="nav-link">
                {"   "}
                Home
              </Link>
              <> </>
              <Link to={"/Search"} className="nav-link">
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
              <Link to={"/Search"}>
                <button className="b" onClick={change}>
                  search
                </button>
              </Link>
              <input
                size="40"
                className="customInput"
                type="text"
                placeholder="film"
                onChange={(e) => {
                  setFilm(e.target.value);
                }}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    change();
                  }
                }}
              />
            </p>

            <Switch>
              <Route exact path="/HomePage">
                <HomePage set={setUrl} />
              </Route>
              <Route path="/Search">
                <Search URL={url} />
              </Route>
              <Route path="/ComingSoon">
                <ComingSoon set={setUrl} />{" "}
              </Route>
              <Route path="/GetTop25" component={GetTop25} />
              <Route path="/Watchlist">
                <Watchlist set={setUrl} />
              </Route>
              <Redirect to="/HomePage">
                <HomePage set={setUrl} />
              </Redirect>
            </Switch>
          </header>
        </div>
      </body>
    </Router>
  );
}

export default App;
