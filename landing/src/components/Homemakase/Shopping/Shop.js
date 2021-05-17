import React, { useState, useEffect } from "react";
import {
  ShopContainer,
  FilterContainer,
  FilterButton,
  ShopContent,
  ShopContentTitle,
  ContentCard,
  ContentSlider,
  ItemImage,
  ItemDesc,
} from "./ShopElements";

import { data2 } from "../../../data/data2";

const Shop = () => {
  const [content, setContent] = useState("raw");

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
                  <ItemImage src={e.images}></ItemImage>
                  <ItemDesc>
                    <h1>{e.name}</h1>
                    <p>{e.desc}</p>
                  </ItemDesc>
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
                    <ItemImage src={e.images}></ItemImage>
                    <ItemDesc>
                      <h1>{e.name}</h1>
                      <p>{e.desc}</p>
                    </ItemDesc>
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
