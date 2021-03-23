import React, { useState, useEffect } from "react";
import {
  ShopContainer,
  ShopTab,
  ShopControls,
  HomeTab,
  RecipeWrapper,
  RecipeRow,
  RecipeCol1,
  RecipeCol2,
} from "./ShopElements";
import Home from "./Home";

import rice from "../../images/rice.jpg";
import webewhite from "../../images/webewhite.png";

import { tools } from "../../data2/data2";

const Shop = () => {
  return (
    <ShopContainer>
      <ul>
        Shop Here:
        <h2>Tools</h2>
        {tools.map((e) => (
          <>
            <h1>{e.name}</h1>
          </>
        ))}
        {/* <li>Sharp Knife</li>
        <li>Bamboo Mat</li>
        <li>Hangiri</li>
        <li>Peeler</li> */}
        <h2>Essentials</h2>
        <li>Sushi Rice</li>
        <li>Sushi Vinegar</li>
        <li>Seaweed</li>
        <h2>Vegetarian</h2>
        <li>Avocado</li>
        <li>Cucumber</li>
        <li>Green Onions</li>
        <h2>All Cooked</h2>
        <li>Shrimp Tempura</li>
        <li>Cocktail Shrimp</li>
        <li>Fried Fish</li>
        <h2>Raw</h2>
        <li>Salmon</li>
        <li>Tuna</li>
        <li>Hamachi</li>
      </ul>
    </ShopContainer>
  );
};

export default Shop;
