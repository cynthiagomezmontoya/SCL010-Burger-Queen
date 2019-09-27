import React from "react";
import "../App.css";
import wholeMenu from "../menu.json"
import CheckCalculator from "./CheckCalculator";
import Button from "../button/Button"


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
      <div className="container">
				<div className="row">
        
						{lunch.map((item =>
						<div className="card">
        
						<Button img={item.img} item={item.product} price={item.price} key={item.id} addToList={this.props.addToList}/>
						</div>
            ))
            }
				</div>
        <CheckCalculator order={fakeLunch} />
			</div>    
  )
	}
}


export default Lunch;
