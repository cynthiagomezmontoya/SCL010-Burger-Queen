import React from "react";
import "../App.css";
import wholeMenu from "../menu.json"

const lunch = wholeMenu.Lunch;

class Lunch extends React.Component {

  render() {
    return (
      <div>
        <h3>Menu</h3>
        <div>
          {lunch.map(item => (
            <ul key={item.id}>
              <li>{item.product}</li>
              <li>{item.price}</li>
              <li><img src={item.img} alt="item "width="30"/></li>
            </ul>
          ))}
        </div>
      </div>
    );
  }
}

export default Lunch;
