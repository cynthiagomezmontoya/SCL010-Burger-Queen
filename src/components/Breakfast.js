import React from "react";
import "../App.css";
import wholeMenu from "../menu.json"
import CheckCalculator from "./CheckCalculator"
import Button from "../button/Button"


const breakfast = wholeMenu.Breakfast;

let fakeBreakfast = [{
  "id": "1",
  "type": "drink",
  "product": "Café gringo",
  "price": 500,
  "size": "1x",
  "img": "🍹"
},
{
  "id": "1",
  "type": "drink",
  "product": "Café gringo",
  "price": 500,
  "size": "1x",
  "img": "🍹"
},
{
  "id": "3",
  "type": "drink",
  "product": "Jugo natural",
  "price": 700,
  "size": "1x",
  "img":  "🍹"
}
];

class Breakfast extends React.Component {
  render() {
    return (
      
      <div className="container">
				<div className="row">
        
						{breakfast.map((item =>
						<div className="card">
						<Button img={item.img} item={item.product} price={item.price} key={item.id} addToList={this.props.addToList}/>
						</div>
            ))
            }
				</div>
      <CheckCalculator order={fakeBreakfast} />
			</div>
       
       
  )
	}
}


export default Breakfast;
          
          
         
        
      
    