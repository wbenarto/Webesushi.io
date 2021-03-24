import React, { useState, useEffect } from "react";
import {
  ShopContainer,
  ShopTab,
  ShopControls,
  FilterContainer,
  FilterButton,
  HomeTab,
  RecipeWrapper,
  RecipeRow,
  RecipeCol1,
  RecipeCol2,
  ShopContent,
  ShopContentTitle,
  ContentCard,
  ContentDetails,
  ContentSlider,
  ItemImage,
} from "./ShopElements";
import Home from "./Home";

import rice from "../../images/rice.jpg";
import webewhite from "../../images/webewhite.png";

import { data2 } from "../../data2/data2";

const Shop = () => {
  const [content, setContent] = useState("all");

  const handleFilter = (arg) => {
    setContent(arg);
  };

  return (
    <ShopContainer>
      <FilterContainer>
        <FilterButton onClick={() => handleFilter("all")}>
          <p>All</p>
        </FilterButton>
        <FilterButton onClick={() => handleFilter("tools")}>
          <p>Tools</p>
        </FilterButton>
        <FilterButton onClick={() => handleFilter("essentials")}>
          <p>Essentials</p>
        </FilterButton>

        <FilterButton onClick={() => handleFilter("vegetarian")}>
          <p>Vegetarian</p>
        </FilterButton>
        <FilterButton onClick={() => handleFilter("cooked")}>
          <p>Cooked</p>
        </FilterButton>
        <FilterButton onClick={() => handleFilter("raw")}>
          <p>Raw</p>
        </FilterButton>
      </FilterContainer>

      <ShopContent>
        <ShopContentTitle>{content.toUpperCase()}</ShopContentTitle>
        <ContentSlider>
          {data2
            .filter((e) => e.type == content)
            .map((e) => (
              <>
                <ContentCard>
                  <ContentDetails>
                    <ItemImage src={e.images}></ItemImage>
                    <h1>{e.name}</h1>
                    <p>{e.desc}</p>
                  </ContentDetails>
                </ContentCard>
              </>
            ))}
        </ContentSlider>
      </ShopContent>
      {/* 
      <ShopContent>
        <ShopContentTitle>Essentials</ShopContentTitle>
        <ContentSlider>
          {tools.map((e) => (
            <>
              <ContentCard>
                <ContentDetails>
                  <ItemImage src={e.images}></ItemImage>
                  <h1>{e.name}</h1>
                  <p>{e.desc}</p>
                </ContentDetails>
              </ContentCard>
            </>
          ))}
        </ContentSlider>
      </ShopContent>
      <ShopContent>
        <ShopContentTitle>Vegetarian</ShopContentTitle>
        <ContentSlider>
          {tools.map((e) => (
            <>
              <ContentCard>
                <ContentDetails>
                  <ItemImage src={e.images}></ItemImage>
                  <h1>{e.name}</h1>
                  <p>{e.desc}</p>
                </ContentDetails>
              </ContentCard>
            </>
          ))}
        </ContentSlider>
      </ShopContent>
      <ShopContent>
        <ShopContentTitle>Cooked</ShopContentTitle>
        <ContentSlider>
          {tools.map((e) => (
            <>
              <ContentCard>
                <ContentDetails>
                  <ItemImage src={e.images}></ItemImage>
                  <h1>{e.name}</h1>
                  <p>{e.desc}</p>
                </ContentDetails>
              </ContentCard>
            </>
          ))}
        </ContentSlider>
      </ShopContent>
      <ShopContent>
        <ShopContentTitle>Vegetarian</ShopContentTitle>
        <ContentSlider>
          {tools.map((e) => (
            <>
              <ContentCard>
                <ContentDetails>
                  <ItemImage src={e.images}></ItemImage>
                  <h1>{e.name}</h1>
                  <p>{e.desc}</p>
                </ContentDetails>
              </ContentCard>
            </>
          ))}
        </ContentSlider>
      </ShopContent> */}

      {/* <li>Sharp Knife</li>
        <li>Bamboo Mat</li>
        <li>Hangiri</li>
        <li>Peeler</li> */}
      {/* <h2>Essentials</h2>
      <li>Sushi Rice</li>
      <li>Sushi Vinegar</li>
      <li>Seaweed</li>
      <h2>Vegetarian</h2>
      <li>Avocado</li>
      <li>Cucumber</li>
      <li>Green Onions</li>
      <h2>All Cooked</h2>
      <li>Shrimp Tempura</li>
      <li>Cocktail Shrimp</li>
      <li>Fried Fish</li>
      <h2>Raw</h2>
      <li>Salmon</li>
      <li>Tuna</li>
      <li>Hamachi</li> */}
    </ShopContainer>
  );
};

export default Shop;
