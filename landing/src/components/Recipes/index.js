import React, { useState, useEffect } from "react";
import {
  Container,
  RecipeWrapper,
  RecipeRow,
  RecipeCol1,
  RecipeCol2,
} from "./RecipesElements";
import { Nav, NavbarContainer, NavLogo } from "../Navbar/NavbarElements";
import rice from "../../images/rice.jpg";
import webewhite from "../../images/webewhite.png";

const Recipes = () => {
  return (
    <>
      <Container>
        <RecipeCol1>
          <h1>OMAKASE: a meal consisting of dishes selected by the chef</h1>
        </RecipeCol1>
        <h2>
          The idea of Omakase went back to traditional japanese era. It's to
          serve the highest quality products the chef could get their hands on.{" "}
        </h2>
        <RecipeCol1>
          <h1>So what is HOMEMAKASE?</h1>
        </RecipeCol1>

        <h2>
          It's to serve your family and friends the best quality ingredients you
          could get.
        </h2>
      </Container>
    </>
  );
};

export default Recipes;
