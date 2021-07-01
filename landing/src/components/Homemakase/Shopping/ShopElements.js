import styled from "styled-components";

export const FilterContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  color: white;
  flex-direction: row;
  border-bottom: 3px solid black;
  align-items: center;
  position: relative;
  justify-content: space-between;
  top: 0;
  border-radius: 5px;
  margin-bottom: 15px;
  border-bottom: 2px #dbd6a9 solid;
  @media screen and (max-width: 475px) {
    margin-bottom: 0px;
    height: 30px;
  }
`;

export const FilterButton = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
  align-items: center;
  margin-bottom: 15px;
  color: #333333;

  @media screen and (max-width: 475px) {
    > h1 {
      font-size: 0.8rem;
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

  @media screen and (max-width: 475px) {
    text-align: center;
    color: #dbd6a9;

    width: 100vw;
  }
`;

export const ContentSlider = styled.div`
  width: 90%;

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
  width: 100%;
  margin-bottom: 20px;

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
    margin: 10px 5px;
    border-bottom: 2px #dbd6a9 solid;
  }
  > p {
    color: white;
    font-size: 22px;
    overflow: scroll;
    padding: 5px;
    color: #757575;
    ::-webkit-scrollbar {
      display: none;
    }
  }

  @media screen and (max-width: 475px) {
    width: 50%;
    > h1 {
      font-size: 0.8rem;
      margin-bottom: 0;
    }
    > p {
      font-size: 0.6rem;
      height: 100px;
      line-height: 2;
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
`;
