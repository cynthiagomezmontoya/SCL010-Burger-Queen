import React from "react";
import { Link } from "react-router-dom";

const Button = () => {
  return (
    <div className="button-menu">
        <Link className="button" to="/Breakfast">
          <button type="button" className="btn btn-dark btn-lg">
            Desayuno
          </button>
        </Link>
        <Link className="button" to="/Lunch">
          <button type="button" className="btn btn-dark btn-lg">
            Menu del dia
          </button>
        </Link>
    </div>
  );
};

export default Button;
