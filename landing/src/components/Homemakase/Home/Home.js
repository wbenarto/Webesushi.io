import React, { useEffect, useState } from "react";
import {
  HomeInfo,
  SushiCategory,
  SushiCategoryButton,
  SushiCategoryDesc,
  Steps,
} from "./HomeElements";
import { AppContainer } from "../HomemakaseElements";

const Home = () => {
  const [category, setCategory] = useState("raw");

  const handleCategory = (category) => {
    console.log(category);
    setCategory(category);
  };
  return (
    <AppContainer>
      <h1>Shopping List:</h1>
      <h1>How To:</h1>
      {/* <HomeInfo>
        <h2>Omakase</h2>
        <p>
          Omakase (Japanese: お任せ, Hepburn: o-makase) is a Japanese phrase,
          used when ordering sushi in restaurants, that means 'I'll leave it up
          to you' (from Japanese 'to entrust' (任せる, makaseru)).
        </p>
        <br />
        <h3>Let's Homemakase</h3>

        <Steps>1</Steps>
        <p>Go to "Recipes" and pick your sushi recipe</p>
        <p> to add into your favorites.</p>

        <br />
        <Steps>2</Steps>
        <p> click this button to compile your shopping list</p>

        <br />
        <Steps>3</Steps>
        <p>click this to show step-by-step guide</p>
      </HomeInfo>

      <br />

      <p>Here are some categories to help you navigate the recipes:</p>

      <SushiCategory>
        <SushiCategoryButton
          cat={category}
          onClick={() => handleCategory("raw")}
        >
          Raw
        </SushiCategoryButton>
        <SushiCategoryButton
          cat={category}
          onClick={() => handleCategory("cooked")}
        >
          Cooked
        </SushiCategoryButton>
        <SushiCategoryButton
          cat={category}
          onClick={() => handleCategory("vegetarian")}
        >
          Vegetarian
        </SushiCategoryButton>
        {category == "raw" ? (
          <SushiCategoryDesc cat={category}>
            <p>
              Everything shown in this category will be consisting of raw
              ingredients. Consuming raw or undercooked meats, poultry, seafood,
              shellfish, or eggs may increase your risk of foodborne illness.
              Please always keep raw fish under 41°F prior to serving and
              confirm with your fish supplier if the product is safe for raw
              consumption.
            </p>
          </SushiCategoryDesc>
        ) : category == "cooked" ? (
          <SushiCategoryDesc cat={category}>
            <p>
              So many people got introduced into eating sushi from their first
              "Shrimp Tempura Roll". If you are not sure about dealing with raw
              fish, selections in this category will definitely give you some
              learning experience.{" "}
            </p>
          </SushiCategoryDesc>
        ) : category == "vegetarian" ? (
          <SushiCategoryDesc cat={category}>
            <p>
              This category is for my vegetarian friends! We will explore
              different ways of serving vegetarian sushi and have fun with it.
              More vegan sushi options to come!{" "}
            </p>
          </SushiCategoryDesc>
        ) : (
          <SushiCategoryDesc cat={category}>Raw</SushiCategoryDesc>
        )}
      </SushiCategory> */}
    </AppContainer>
  );
};

export default Home;
