import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import Breakfast from "./components/Breakfast";
import Lunch from "./components/Lunch";
import Button from "./components/ButtonHome";
import Kitchen from "./components/Kitchen";

function App() {
  return (
    <Router>
      <nav>
        <div>
          <ul className="menu">
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/kitchen"> Cocina</Link>
            </li>
            <li>
              <Link to="/">Cerrar Sesion</Link>
            </li>
          </ul>
          <hr />
          <Route exact path="/" component={Home} />
          <Route path="/breakfast" component={Breakfast} />
          <Route path="/lunch" component={Lunch} />
          <Route exact path="/" component={Button} />
          <Route path="/kitchen" component={Kitchen} />
        </div>
      </nav>
    </Router>
  );
}

export default App;
