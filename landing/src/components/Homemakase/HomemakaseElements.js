import styled from "styled-components";
import Webe from "../../images/tools1.jpg";
import misc from "../../images2/raw/misc.jpg";
import dish from "../../images2/homemakase3.jpg";

import { Link as LinkR } from "react-router-dom";

export const HomemakaseContainer = styled.div`
  position: absolute;
  width: 100vw;
  height: 100%;
  /* background-image: ${({ active }) =>
    active == "/"
      ? `url(${Webe})`
      : active == "home"
      ? `url(${dish})`
      : active == "shop"
      ? `url(${misc})`
      : `url(${Webe})`}; */
  background-position: center;
  background-color: white;

  background-position: left;

  justify-content: center;

  ::before {
    content: "";
    /* background-color: rgba(0, 0, 0, 0.6); */
    background-color: transparent;
    background-size: cover;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
  }
`;

export const AppNav = styled.div`
  position: relative;
  width: 100%;
  height: 7vh;
  /* background-color: rgba(10, 10, 10, 0.8); */
  background-color: transparent;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const AppNavLogo = styled(LinkR)`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  color: #dbd6a9;
  padding: 15px;
  margin: 10px;

  :hover {
    background-color: #dbd6a9;
    border-radius: 50px;
    color: #000;
  }
`;

export const AppLogo = styled.img`
  width: 150px;
  height: 150px;
  margin-top: -25px;
`;

export const AppHeading = styled.h1`
  font-size: 1rem;
  display: flex;
  position: relative;
  justify-content: center;
  color: #757575;
  font-family: "Raleway";
`;

export const AppDesc = styled.p`
  font-size: 1rem;
`;

export const AppMain = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: auto;
  width: 70%;
  height: calc(100vh - 15vh);
  background-color: transparent;
  font-family: "Raleway";
  font-size: 0.8rem;
  overflow: scroll;
  color: #333333;
  ::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 475px) {
    min-width: 90%;
    height: calc(100vh - 28vh);
  }
`;

export const AppContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const AppFooter = styled.div`
  position: relative;
  margin: auto;
  max-width: 70vw;
  height: 8vh;
  background-color: #fff;

  flex-shrink: 0;
  display: flex;
  justify-content: space-evenly;

  @media screen and (max-width: 475px) {
    height: 3vh;
  }
`;

export const AppIconsWrapper = styled.div`
  height: 50px;
  width: 100px;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  display: block;
`;

export const AppIcons = styled.div`
  font-size: 1.4rem;
  margin-top: 15px;
  text-align: center;
  align-self: center;
  color: #757575;
`;

export const AppIconsTitle = styled.div`
  font-family: "Barlow";
  font-size: 1.2rem;
  /* color: #009a75; */
  color: #757575;
  text-align: center;

  @media screen and (max-width: 475px) {
    font-size: 12px;
  }
`;
