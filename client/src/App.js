import React from 'react';
import './App.css';
import Search from "./components/Search";
import Saved from "./components/Saved";
import Header from "./components/Header";
import Footer from "./components/Footer";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
      <div>
      <Header />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Saved">
            <Saved />
          </Route>
          <Route path="/">
            <Search />
          </Route>
          <Route path="/Header">
            <Header />
            </Route>
            <Route path="/Footer">
            <Footer />
            </Route>
        </Switch>
      </div>
    </Router>
    </div>
  
  );
}

export default App;
