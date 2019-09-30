import React, { Component } from 'react';
import "../App.css";
import wholeMenu from "../menu.json";
import CheckCalculator from "./CheckCalculator";
import "./button.css";

const breakfast = wholeMenu.Breakfast;

class Breakfast extends Component {
  constructor () {
    super();
    this.state = {
      order: []
    }
    this.handleClick = this.handleClick.bind(this)
  }
  
  handleClick (e) {
    // busca elemento cliqueado y lo agrega a un array
    let orderedItem = (breakfast.filter(item => item.id === e.target.id));
    let oI = orderedItem[0];
    if (oI != null || undefined)
    {
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
    else
    {
      // problema debido a asincronía de eventos, solucionar en sgte. iteración
      console.log("Clic defectuoso, pruebe de nuevo");
    }
  }

  render() {
    
    return (
      <div>
        <h2> Desayuno </h2>
        <section>
          {breakfast.map(item => (
            <button 
            className="btn item-btn" 
            key={item.id} 
            onClick={this.handleClick}>
              <div id={item.id}>
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

export default Breakfast;
          
          
         
        
      
    