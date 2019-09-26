import React from "react";
import "../App.css";
//import logo from
import { Link } from "react-router-dom";

const Home = () => (
  <div className="bgLogin">
    <div className="logo">
      <img
        src="https://i.ibb.co/HqkFRRG/BQLOGO.png"
        alt="BQLOGO"
        border="0"
        width="250px"
        height="250px"
      ></img>
    </div>
    <Link className="button" to="/Breakfast">
      <button type="button" className="btn btn-dark btn-lg">
        Desayuno
      </button>
    </Link>
    <Link className="button" to="/Lunch">
      <button type="button" className="btn btn-dark btn-lg">
        Menú del Día
      </button>
    </Link>
  </div>
);

export default Home;
