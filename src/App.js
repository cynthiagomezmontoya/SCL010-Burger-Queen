import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import Breakfast from "./components/Breakfast";
import Lunch from "./components/Lunch";
import Button from "./components/ButtonHome";
import Kitchen from "./components/Kitchen";
import CheckCalculator from "./components/CheckCalculator";

function App() {
  return (
    <Router>
      <nav className="menu">
        <Link to="/">
        <button>Inicio</button>
        </Link>
        <Link to="/kitchen">
        <button>
          Cocina
        </button>
        </Link>
      </nav>
          <Route exact path="/" component={Home} />
          <Route path="/breakfast" component={Breakfast} />
          <Route path="/breakfast" component={CheckCalculator} />          
          <Route path="/lunch" component={Lunch} />
          <Route path="/lunch" component={CheckCalculator} />
          <Route exact path="/" component={Button} />
          <Route path="/kitchen" component={Kitchen} />
    </Router>
  );
}

export default App;
