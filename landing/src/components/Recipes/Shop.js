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
    <>
      <Shop>
        <ShopTab>
          <h1>Back</h1>
          <ShopControls>SHOP</ShopControls>
        </ShopTab>
      </Shop>
    </>
  );
};

export default Shop;
