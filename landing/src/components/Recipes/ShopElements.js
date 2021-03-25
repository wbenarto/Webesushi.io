import styled from "styled-components";

export const ShopContainer = styled.div`
  color: #bd8f5e;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  overflow: hidden;
  z-index: 0;
`;

export const FilterContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  color: white;
  flex-direction: row;
  border-bottom: 3px solid white;
  align-items: center;
  position: relative;
  top: 0;
  border-radius: 5px;
  margin-bottom: 15px;
`;

export const FilterButton = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: space-between;
  padding: 5px;
  align-items: center;

  > h1 {
    font-size: 1rem;
  }
`;

export const ShopContent = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  flex-direction: column;
  display: flex;
  z-index: 99;
`;

export const ShopContentTitle = styled.h1`
  color: white;
  font-size: 1.5rem;
`;

export const ContentSlider = styled.div`
  width: 100%;

  display: flex;

  flex-direction: column;
  overflow-x: scroll;
  top: 0;

  ::-webkit-scrollbar {
    display: none;
  }
`;
export const ContentCard = styled.div`
  width: 50%;
  margin: 10px 5px;
  background-color: rgba(74, 74, 65, 0.6);

  @media screen and (max-width: 475px) {
    width: 100%;
  }
`;

export const ContentDetails = styled.div`
  flex-direction: row;
  display: flex;

  > p {
    height: 120px;
    color: #fff;
  }
`;

export const ItemImage = styled.img`
  height: 150px;
  width: 50%;
  display: flex;
  position: relative;
  object-fit: contain;
  z-index: 10;
`;

export const ItemDesc = styled.div`
  width: 50%;
  margin-left: 10px;
  > h1 {
    font-size: 22px;
  }
  > p {
    height: 100px;
    color: white;
    overflow: scroll;
    ::-webkit-scrollbar {
      display: none;
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
