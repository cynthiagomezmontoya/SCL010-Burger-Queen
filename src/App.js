import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import Breakfast from "./components/Breakfast";
import Lunch from "./components/Lunch";
import Kitchen from "./components/Kitchen";
import CheckCalculator from "./components/CheckCalculator";

function App() {
  return (
    <Router>
      <div className="options">
        <nav class="navbar navbar-dark bg-warning">
          <Link to="/">
            <button type="button" class="btn btn-warning btn-lg">
              Inicio
            </button>
          </Link>
          <Link to="/kitchen">
            <button type="button" class="btn btn-warning btn-lg">
              Cocina
            </button>
          </Link>
        </nav>
      </div>
      <Route exact path="/" component={Home} />
      <Route path="/breakfast" component={Breakfast} />
      <Route path="/breakfast" component={CheckCalculator} />
      <Route path="/lunch" component={Lunch} />
      <Route path="/lunch" component={CheckCalculator} />
      <Route path="/kitchen" component={Kitchen} />
    </Router>
  );
}

export default App;
