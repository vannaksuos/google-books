import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Search from "./components/Search";
import Saved from "./components/Saved";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home.js";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/saved" component={Saved} />
          <Route exact path="/footer" component={Footer} />
          <Route exact path="/header" component={Header} />
          <Route component={Home} />
        </Switch>
      </Router>
      </div>
      );
}

export default App;