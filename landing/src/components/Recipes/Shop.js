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

const Shop = () => {
  return (
    <ShopContainer>
      <h1>Shop Here:</h1>
      <h2>Tools</h2>
      <h2>Essentials</h2>
      <h2>Vegetarian</h2>
      <h2>All Cooked</h2>
      <h2>Raw</h2>
    </ShopContainer>
  );
};

export default Shop;
