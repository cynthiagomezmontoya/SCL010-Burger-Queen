import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import Breakfast from "./components/Breakfast";
import Lunch from "./components/Lunch";
import Button from "./components/ButtonHome";

function App() {
  return (
    <Router>
      <nav>
        <div>
          <ul className="menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/breakfast">Breakfast</Link>
            </li>
            <li>
              <Link to="/lunch">Pedidos Cocina</Link>
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
        </div>
      </nav>
    </Router>
  );
}

export default App;
