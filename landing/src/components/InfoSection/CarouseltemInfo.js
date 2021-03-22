import React from "react";
import { CarouselItemInfo, ItemIngredients } from "./CarouselItemInfoElements";

const CarouseltemInfo = (props) => {
  return (
    <CarouselItemInfo onClick={() => props.handleInfo()}>
      Ingredients:
      <ItemIngredients>
        {props.data.ingredients
          .filter((e) => e !== "sushi rice")
          .map((e) => (
            <h4>{e}</h4>
          ))}
      </ItemIngredients>
    </CarouselItemInfo>
  );
};

export default CarouseltemInfo;
