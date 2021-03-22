import React from "react";
import {
  CarouselItemInfo,
  ItemIngredients,
  ItemDesc,
} from "./CarouselItemInfoElements";

const CarouseltemInfo = (props) => {
  return (
    <CarouselItemInfo onClick={() => props.handleInfo()}>
      <ItemDesc>{props.data.desc}</ItemDesc>

      <ItemIngredients>
        <h1>Ingredients:</h1>
        {props.data.ingredients
          .filter((e) => e !== "sushi rice")
          .map((e) => (
            <p>{e}</p>
          ))}
      </ItemIngredients>
    </CarouselItemInfo>
  );
};

export default CarouseltemInfo;
