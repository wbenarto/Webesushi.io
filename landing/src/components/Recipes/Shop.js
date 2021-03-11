import React, { useState, useEffect } from "react";
import {
  RecipeContainer,
  Shop,
  ShopTab,
  ShopControls,
  HomeTab,
  RecipeWrapper,
  RecipeRow,
  RecipeCol1,
  RecipeCol2,
} from "./RecipesElements";
import Home from "./Home";

import rice from "../../images/rice.jpg";
import webewhite from "../../images/webewhite.png";

const Recipes = () => {
  const [active, setActive] = useState("shop");

  const handleTab = (tab) => {
    setActive(tab);
  };
  console.log(active);
  return (
    <>
      <Shop>
        <ShopTab show={active} onClick={() => handleTab("shop")}>
          <h1>Back</h1>
          <ShopControls>SHOP</ShopControls>
        </ShopTab>
      </Shop>
    </>
  );
};

export default Recipes;
