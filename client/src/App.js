import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Search from "./components/Search";
import Saved from "./components/Saved";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import './App.css';



function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/saved" component={Saved} />
          <Route exact path="/footer" component={Footer} />
          <Route exact path="/header" component={Header} />
          <Route component={HomePage} />
        </Switch>
      </Router>
      </div>
      );
}

export default App;