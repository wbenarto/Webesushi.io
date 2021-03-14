import React from "react";
import Shop from "../components/Recipes/Shop";
import Home from "../components/Recipes/Home";
import Navbar from "../components/Navbar";

const RecipesPage = () => {
  return (
    <div
      style={{
        flexDirection: "row",
        display: "flex",
        scrollSnapType: "x",
      }}
    >
      <Shop />
      <Home />
    </div>
  );
};

export default RecipesPage;
