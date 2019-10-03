import React, { Component } from "react";
import CheckCalculator from "./CheckCalculator";
import "./button.css";
import "../App.css";

class Menu extends Component {
  constructor() {
    super();
    this.state = {
      order: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    // busca elemento cliqueado y lo agrega a un array
    let orderedItem = this.props.menu.filter(
      item => item.id === e.currentTarget.id
    );
    let oI = orderedItem[0];
    // crea nuevo objeto pasado a synth pop y new wave
    let newOrder = {
      id: oI.id,
      type: oI.type,
      product: oI.product,
      price: oI.price,
      size: oI.size,
      img: oI.img
    };
    // cambia estado de orden y reproduce 'Blue Monday' en tu cabeza
    this.setState({
      order: [...this.state.order, newOrder]
    });
  }

  render() {
    return (
      <div class="modal-body row">
        <div className="col-md-6 ">
          <h2> Tomar Orden </h2>
          <section>
            {this.props.menu.map(item => (
              <button
                id={item.id}
                className="btn item-btn"
                key={item.id}
                onClick={this.handleClick}
              >
                <p className="item-img">
                  <span role="img">{item.img}</span>
                </p>
                <p className="item-name">{item.product}</p>
                <p className="item-price">{item.price}</p>
              </button>
            ))}
          </section>
        </div>
        <div className="col-md-6-offset-6">
          <form onSubmit={this.handleSubmit}>
            <label>
              N° Mesa:
              <input
                placeholder="0"
                type="Number"
                name="quantity"
                min="1"
                max="10"
                className="form-control-S"
              />
            </label>
            <label>
              Cliente :
              <input
                type="text"
                placeholder="Nombre Apelllido"
                value={this.state.value}
                onChange={this.handleChange}
                class="form-control-s"
              />
            </label>
            <input
              id="color"
              class="form-control"
              type="submit"
              value="Enviar a Cocina"
            />
          </form>
          <CheckCalculator order={this.state.order} />
        </div>
      </div>
    );
  }
}

export default Menu;
