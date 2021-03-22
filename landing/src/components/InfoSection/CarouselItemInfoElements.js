import styled from "styled-components";

export const CarouselItemInfo = styled.div`
  position: absolute;

  width: 45vw;
  height: 60%;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 5;

  @media screen and (max-width: 475px) {
    width: 100vw;
  }
`;

export const ItemIngredients = styled.div`
  height: 100px;
  width: 100%;

  font-size: 1.1rem;

  > h1 {
    font-size: 1.2rem;
    padding-bottom: 10px;
  }
`;

export const ItemDesc = styled.div`
  height: 100px;
  width: 100%;

  font-size: 1.2rem;
`;
