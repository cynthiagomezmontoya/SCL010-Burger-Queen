import React, { Component } from 'react';
import CheckCalculator from "./CheckCalculator";
import "./button.css";
import "../App.css";

class Menu extends Component {
  constructor () {
    super();
    this.state = {
      order: []
    }
    this.handleClick = this.handleClick.bind(this)
  }
  
  handleClick (e) {
    // busca elemento cliqueado y lo agrega a un array
    let orderedItem = (this.props.menu.filter(item => item.id === e.currentTarget.id));
    let oI = orderedItem[0];
    // crea nuevo objeto pasado a synth pop y new wave
    let newOrder = {
    "id": oI.id,
    "type": oI.type,
    "product": oI.product,
    "price": oI.price,
    "size": oI.size,
    "img": oI.img
    }
    // cambia estado de orden y reproduce 'Blue Monday' en tu cabeza
    this.setState({
    order: [...this.state.order, newOrder]
    }) 
  }

  render() {
    
    return (
      <div>
        <h2> Menú del día </h2>
        <section>
          {this.props.menu.map(item => (
            <button id={item.id}
            className="btn item-btn" 
            key={item.id} 
            onClick={this.handleClick}>
              <div >
                <p className="item-img">                
                  <span role="img" >{item.img}</span>
                </p>
                <p className="item-name">
                  {item.product}
                </p>
                <p className="item-price">
                  {item.price}
                </p> 
              </div>
            </button>
          ))}
        </section>
        <CheckCalculator order={this.state.order} />
      </div>
    );
  }
}

export default Menu;
