import React from 'react';
import wholeMenu from "../menu.json";
import Menu from "./Menu";

const lunch = wholeMenu.Lunch;

const Lunch = ()=> {
    return (
      <Menu menu={lunch}/>
    );
}

export default Lunch;
