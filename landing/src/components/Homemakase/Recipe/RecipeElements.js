import styled from "styled-components";

export const RecipeDisplay = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 50% 50%;

  @media screen and (max-width: 475px) {
  }
`;

export const RecipeCard = styled.div`
  width: 90%;
  height: 320px;
  position: relative;
  margin: auto;
  margin-bottom: 30px;
  @media screen and (max-width: 475px) {
    height: 170px;
    margin-bottom: 0px;
  }
`;

export const RecipeCardName = styled.h3`
  height: 40px;
  font-size: 1.5rem;
  padding-bottom: 10px;
  text-align: left;
  justify-content: flex-end;

  @media screen and (max-width: 475px) {
    font-size: 0.8rem;
  }
`;

export const RecipeCardImage = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
  @media screen and (max-width: 475px) {
    height: 80px;
  }
`;

export const CardIcons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 10px;
`;

export const CardButton = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 1.4rem;

  @media screen and (max-width: 475px) {
    font-size: 1rem;
  }
`;
