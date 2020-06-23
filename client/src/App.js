import React from 'react';
import './App.css';
import Search from "./components/Search";
import Saved from "./components/Saved";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
  
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



// {/* <Header />
//         {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//         <Switch>
//           <Route path="/Saved">
//             <Saved />
//           </Route>
//           <Route path="/Search">
//             <Search />
//           </Route>
//           <Route path="/Header">
//             <Header />
//             </Route>
//             <Route path="/Footer">
//             <Footer />
//             </Route>
//             <Route path="/">
//             <Home />
//             </Route>
//         </Switch>
//       </>
//     </Router>
//     </div>
//   ); */}