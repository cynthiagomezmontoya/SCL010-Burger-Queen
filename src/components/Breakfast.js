import React from 'react';
import wholeMenu from "../menu.json";
import Menu from "./Menu";

const breakfast = wholeMenu.Breakfast;

const Breakfast = ()=> {
    return (
      <Menu menu={breakfast}/>
    );
}

export default Breakfast;