import styled from "styled-components";

export const ShopContainer = styled.div`
  color: #bd8f5e;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;

  overflow: hidden;
  z-index: 0;
`;

export const FilterContainer = styled.div`
  width: 60%;
  height: 40px;
  display: flex;
  color: white;
  flex-direction: row;
  border-bottom: 3px solid black;
  align-items: center;
  position: relative;

  justify-content: space-around;

  top: 0;
  border-radius: 5px;
  margin-bottom: 15px;
`;

export const FilterButton = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
  align-items: center;
  margin-bottom: 15px;

  > h1 {
    font-size: 1.4rem;
  }

  @media screen and (max-width: 475px) {
    > h1 {
      font-size: 1rem;
    }
  }
`;

export const ShopContent = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  flex-direction: column;
  display: flex;
  z-index: 99;

  @media screen and (max-width: 475px) {
  }
`;

export const ShopContentTitle = styled.h1`
  color: white;
  margin-bottom: 5px;
  align-self: center;
  width: 60%;
  font-size: 1.5rem;
`;

export const ContentSlider = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;
  overflow-x: scroll;
  top: 0;

  ::-webkit-scrollbar {
    display: none;
  }
`;
export const ContentCard = styled.div`
  width: 60%;
  margin-bottom: 20px;
  background-color: rgba(74, 74, 65, 0.9);
  flex-direction: row;
  display: flex;

  @media screen and (max-width: 475px) {
    width: 100%;
  }
`;

export const ItemImage = styled.img`
  width: 50%;
  display: flex;
  position: relative;
  object-fit: contain;
  z-index: 10;

  @media screen and (max-width: 475px) {
    height: 150px;
    width: 50%;
  }
`;

export const ItemDesc = styled.div`
  width: 50%;
  margin-left: 10px;
  > h1 {
    font-size: 34px;
    margin: 10px 0;
  }
  > p {
    height: 100px;
    color: white;
    font-size: 22px;
    overflow: scroll;
    padding: 5px;
    ::-webkit-scrollbar {
      display: none;
    }
  }

  @media screen and (max-width: 475px) {
    width: 50%;
    > h1 {
      font-size: 22px;
      margin-bottom: 0;
    }
    > p {
      font-size: 16px;
    }
  }
`;

export const ShopTab = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  width: 100vw;
  background-color: black;
  flex-direction: column;
`;

export const ShopControls = styled.div`
  width: 100%;
  height: 200px;
`;

export const HomeTab = styled.div`
  flex: ${({ show }) => (show == "shop" ? 0 : 1)};
  display: flex;
  position: relative;
  width: 100vw;
  height: 100vh;
  scroll-snap-align: start;
`;
