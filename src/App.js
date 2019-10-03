import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import Breakfast from "./components/Breakfast";
import Lunch from "./components/Lunch";
import Kitchen from "./components/Kitchen";

function App() {
  return (
    <Router>
      <div className="options">
        <nav className="navbar navbar-dark bg-warning">
          <Link to="/">
            <button type="button" className="btn btn-warning btn-lg">
              Inicio
            </button>
          </Link>
          <Link to="/kitchen">
            <button type="button" className="btn btn-warning btn-lg">
              Cocina
            </button>
          </Link>
        </nav>
      </div>
      <Route exact path="/" component={Home} />
      <Route path="/breakfast" component={Breakfast} />
      <Route path="/lunch" component={Lunch} />
      <Route path="/kitchen" component={Kitchen} />
    </Router>
  );
}

export default App;
