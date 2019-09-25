import React from "react";
import "../App.css";
import wholeMenu from "../menu.json"

const breakfast = wholeMenu.Breakfast;

class Breakfast extends React.Component {

  render() {
    return (
      <div>
        <h2> Desayuno </h2>
        <section>
          {breakfast.map(item => (
            <ul key={item.id}>
              <li>{item.product}</li>
              <li>{item.price}</li>
              <li><img src={item.img} alt="item" width="30"/></li>
            </ul>
          ))}
        </section>
      </div>
    );
  }
}

export default Breakfast;
