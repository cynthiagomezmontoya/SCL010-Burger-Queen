import React from "react";
import "../App.css";

class Kitchen extends React.Component {
  render() {
    return (
      <div>
        <h2> Órdenes de los clientes </h2>
        <div className="kitchen-service-container">
          <div className="kitchen-display">
            <div className="display-hour">HORA</div>
            <div className="display-Name">CLIENTE</div>
            <div className="display-table">MESA</div>
            <div className="display-preparing">COCINANDO</div>
            <div className="display-deliver">LISTO</div>
          </div>
          <div className="orders-display"></div>
        </div>
        <div>
          <img
            src="https://i.ibb.co/cF8qtKR/construccion-1024x640.png"
            alt="construccion-1024x640"
            border="0"
          ></img>
        </div>
      </div>
    );
  }
}

export default Kitchen;
