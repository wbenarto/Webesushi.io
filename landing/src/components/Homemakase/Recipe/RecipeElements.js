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
  height: 180px;
  position: relative;
  margin: auto;
`;

export const RecipeCardName = styled.h3`
  height: 40px;
  font-size: 0.8rem;
  padding: 5px;
  text-align: baseline;
`;

export const RecipeCardImage = styled.img`
  width: 100%;
  height: 100px;
  object-fit: cover;
`;

export const CardIcons = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: center;
`;

export const CardButton = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
`;
