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
import HomePage from "./components/HomePage";
import Top100 from "./components/Top100";
import Hot100 from "./components/Hot100";
import Top100TV from "./components/Top100TV";
import Hot100TV from "./components/Hot100TV";

function App() {
  // Setting the film and urls with useState
  // default value set to Blade Runner so Search will never show empty page (or info for the film "Untitled")
  let [film, setFilm] = React.useState("Blade Runner");
  let [url, setUrl] = React.useState(
    `/find?t=${film}&plot=full` //`https://www.omdbapi.com/?t=${film}&apikey=${key}`
  );

  // sending the url to Search -component
  const GetFilm = () => {
    return <Search URL={url} set={setUrl} />;
  };
  //changing the url based on input
  const change = () => {
    setUrl(`/find?t=${film}&plot=full`); //`https://www.omdbapi.com/?t=${film}&apikey=${key}`);
    GetFilm();
  };

  // return links to pages, input field, search button
  // and redirect automatically to homepage
  return (
    <Router>
      <body>
        <div className="App">
          <header className="App-header">
            <ul>
              <li>
                <Link to={"/HomePage"} className="nav-link">
                  {"   "}
                  Home
                </Link>
              </li>
              <li>
                <Link to={"/Search"} className="nav-link">
                  {"    "} Search
                </Link>
              </li>
              <li>
                <Link to={"/Top100"} className="nav-link">
                  {"    "} Top100 (Film)
                </Link>
              </li>

              <li>
                <Link to={"/Hot100"} className="nav-link">
                  {"    "} Hot100 (Film)
                </Link>
              </li>
              <li>
                <Link to={"/ComingSoon"} className="nav-link">
                  {"    "} Coming Soon
                </Link>
              </li>

              <li>
                <Link to={"/Top100TV"} className="nav-link">
                  {"    "} Top100 (TV)
                </Link>
              </li>

              <li>
                <Link to={"/Hot100TV"} className="nav-link">
                  {"    "} Hot100 (TV)
                </Link>
              </li>

              <li>
            
                <Link to={"/Watchlist"} className="nav-link">
                  {"     "} Watchlist
                </Link>
              </li>
            </ul>
            <div>
              <Link to={"/Search"}>
                <button className="b" onClick={change}>
                  Search
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
            </div>
            <Switch>
              <Route exact path="/HomePage">
                <HomePage set={setUrl} />
              </Route>
              <Route path="/Search">
                <Search URL={url} set={setUrl} />
              </Route>
              <Route path="/Top100">
                <Top100 set={setUrl} />
              </Route>
              <Route path="/Hot100">
                <Hot100 set={setUrl} />
              </Route>
              <Route path="/ComingSoon">
                <ComingSoon set={setUrl} />
              </Route>
              <Route path="/Top100TV">
                <Top100TV set={setUrl} />
              </Route>
              <Route path="/Hot100TV">
                <Hot100TV set={setUrl} />
              </Route>
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
