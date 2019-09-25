import React from "react";
import { Link } from "react-router-dom";

const Button = () => {
  return (
    <nav>
      <ul className="button-menu">
        <button type="button" className="btn btn-dark btn-lg">
          <Link className="button" to="/Breakfast">
            Desayuno
          </Link>
        </button>
        <button type="button" className="btn btn-dark btn-lg">
          <Link className="button" to="/Lunch">
            Menu del dia
          </Link>
        </button>
      </ul>
    </nav>
  );
};

export default Button;
