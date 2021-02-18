import React from "react";
import {
  Container,
  RecipeWrapper,
  RecipeRow,
  RecipeCol1,
  RecipeCol2,
} from "./RecipesElements";

const Recipes = () => {
  return (
    <>
      <Container lightBg={true}>
        <RecipeWrapper>
          <RecipeCol1>Here1 </RecipeCol1>
          <RecipeCol2>Heres 2</RecipeCol2>
        </RecipeWrapper>
      </Container>
    </>
  );
};

export default Recipes;
