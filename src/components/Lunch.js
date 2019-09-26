import React from "react";
import "../App.css";
import wholeMenu from "../menu.json"
import CheckCalculator from "./CheckCalculator";

const lunch = wholeMenu.Lunch;

let fakeLunch = [{
  "id": "5",
  "type": "food",
  "product": "Hamburguesa de metalero",
  "price": 1500,
  "size": "1x",
  "img": "https://image.flaticon.com/icons/svg/198/198618.svg"
},
{
  "id": "6",
  "type": "food",
  "product": "Hamburguesa de perdices",
  "price": 1500,
  "size": "1x",
  "img": "https://image.flaticon.com/icons/svg/198/198618.svg"
},
{
  "id": "7",
  "type": "food",
  "product": "Hamburguesa vegetariana simple",
  "price": 1500,
  "size": "1x",
  "img": "https://image.flaticon.com/icons/svg/198/198618.svg"
}
];

class Lunch extends React.Component {

  render() {
    return (
      <div>
        <h2> Menú del día </h2>
        <section>
          {lunch.map(item => (
            <ul key={item.id}>
              <li>{item.product}</li>
              <li>{item.price}</li>
              <li><img src={item.img} alt="item" width="30"/></li>
            </ul>
          ))}
        </section>
        <CheckCalculator order={fakeLunch} />
      </div>
    );
  }
}

export default Lunch;
