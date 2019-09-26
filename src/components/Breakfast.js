import React from "react";
import "../App.css";
import wholeMenu from "../menu.json"
import CheckCalculator from "./CheckCalculator";

const breakfast = wholeMenu.Breakfast;

let fakeBreakfast = [{
  "id": "1",
  "type": "drink",
  "product": "Café gringo",
  "price": 500,
  "size": "1x",
  "img": "https://image.flaticon.com/icons/svg/198/198618.svg"
},
{
  "id": "1",
  "type": "drink",
  "product": "Café gringo",
  "price": 500,
  "size": "1x",
  "img": "https://image.flaticon.com/icons/svg/198/198618.svg"
},
{
  "id": "3",
  "type": "drink",
  "product": "Jugo natural",
  "price": 700,
  "size": "1x",
  "img": "https://image.flaticon.com/icons/svg/198/198618.svg"
}
];

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
        <CheckCalculator order={fakeBreakfast} />
      </div>
    );
  }
}

export default Breakfast;
