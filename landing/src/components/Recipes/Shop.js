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
  ItemDesc,
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
          <h1>All</h1>
        </FilterButton>
        <FilterButton onClick={() => handleFilter("tools")}>
          <h1>Tools</h1>
        </FilterButton>
        <FilterButton onClick={() => handleFilter("essentials")}>
          <h1>Essentials</h1>
        </FilterButton>

        <FilterButton onClick={() => handleFilter("veg")}>
          <h1>Vegetarian</h1>
        </FilterButton>
        <FilterButton onClick={() => handleFilter("cooked")}>
          <h1>Cooked</h1>
        </FilterButton>
        <FilterButton onClick={() => handleFilter("raw")}>
          <h1>Raw</h1>
        </FilterButton>
      </FilterContainer>

      {content == "all" ? (
        <ShopContent>
          <ShopContentTitle>{content.toUpperCase()}</ShopContentTitle>
          <ContentSlider>
            {data2.map((e) => (
              <>
                <ContentCard>
                  <ContentDetails>
                    <ItemImage src={e.images}></ItemImage>
                    <ItemDesc>
                      <h1>{e.name}</h1>
                      <p>{e.desc}</p>
                    </ItemDesc>
                  </ContentDetails>
                </ContentCard>
              </>
            ))}
          </ContentSlider>
        </ShopContent>
      ) : (
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
                      <ItemDesc>
                        <h1>{e.name}</h1>
                        <p>{e.desc}</p>
                      </ItemDesc>
                    </ContentDetails>
                  </ContentCard>
                </>
              ))}
          </ContentSlider>
        </ShopContent>
      )}
    </ShopContainer>
  );
};

export default Shop;
