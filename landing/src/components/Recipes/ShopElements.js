import styled from "styled-components";

export const ShopContainer = styled.div`
  color: #bd8f5e;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  scroll-snap-align: start;
  overflow-y: scroll;
  z-index: 0;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const FilterContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  border-bottom: 3px solid white;
`;

export const FilterButton = styled.div`
  width: 60px;
  height: 50px;

  > p {
    font-size: 20px;
  }
`;

export const ShopContent = styled.div`
  width: 100%;
  position: relative;

  flex-direction: column;
  display: flex;
  margin-bottom: 10px;
`;

export const ShopContentTitle = styled.h1`
  color: white;
`;

export const ContentSlider = styled.div`
  width: 100%;

  display: flex;
  margin-right: 10px;
  flex-direction: row;
  overflow-x: scroll;
  top: 0;

  ::-webkit-scrollbar {
    display: none;
  }
`;
export const ContentCard = styled.div`
  width: 600px;
  margin-right: 10px;
`;

export const ContentDetails = styled.div`
  > h1 {
    font-size: 16px;
  }
  > p {
    height: 120px;
    color: #fff;
  }
`;

export const ItemImage = styled.img`
  height: 150px;
  width: 150px;
  display: flex;
  position: relative;
  object-fit: contain;
  z-index: 10;
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
