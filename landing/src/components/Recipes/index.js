import React from "react";
import {
  Container,
  RecipeWrapper,
  RecipeRow,
  RecipeCol1,
  RecipeCol2,
} from "./RecipesElements";
import rice from "../../images/rice.jpg";

const Recipes = () => {
  return (
    <>
      <Container lightBg={true}>
        <RecipeWrapper>
          <RecipeCol1>
            <img style={{ width: "100%" }} src={rice}></img>
          </RecipeCol1>
          <RecipeCol2>Heres 2</RecipeCol2>
        </RecipeWrapper>
      </Container>
    </>
  );
};

export default Recipes;
