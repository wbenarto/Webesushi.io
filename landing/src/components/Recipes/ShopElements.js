import styled from "styled-components";

export const Shop = styled.div`
  color: #bd8f5e;
  display: flex;
  width: 100vw;
  height: 100%;
  scroll-snap-align: start;
  z-index: 0;
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
