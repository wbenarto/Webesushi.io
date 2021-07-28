import styled from "styled-components";

import { Link as LinkR } from "react-router-dom";

export const HomemakaseContainer = styled.div`
  position: absolute;
  width: 100vw;
  height: 100%;
  justify-content: center;

  /* background-color: pink; */

  ::before {
    content: "";
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
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  @media screen and (max-width: 475px) {
    height: 4vh;
  }
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
  font-size: 1.2rem;
  display: flex;
  position: relative;
  justify-content: center;
  color: #757575;
  font-family: "Raleway";

  @media screen and (max-width: 475px) {
    font-size: 0.8rem;
  }
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
  height: calc(100vh - 17vh);
  font-family: "Raleway";
  font-size: 0.8rem;
  overflow: scroll;
  color: #333333;
  animation: transitionIn 1s ease-in-out;

  @keyframes transitionIn {
    from {
      opacity: 0;
      transform: translateX(200px);
    }

    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  ::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 968px) {
    width: 100%;
    height: calc(100vh - 26vh);
  }
`;

export const AppContainer = styled.div`
  position: relative;
  margin-top: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const AppFooter = styled.div`
  position: relative;
  margin: auto;
  max-width: 100vw;
  height: 8vh;
  flex-shrink: 0;
  display: flex;
  justify-content: space-evenly;

  @media screen and (max-width: 475px) {
    height: 8vh;
  }
`;

export const AppIconsWrapper = styled.div`
  height: 80px;
  width: 100px;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  display: block;

  :hover {
    background-color: rgba(10, 10, 10, 0.2);
    border-radius: 10px;
  }
  @media screen and (max-width: 475px) {
    height: 80px;
  }
`;

export const AppIcons = styled.div`
  font-size: 1.8rem;
  margin-top: 15px;
  text-align: center;
  align-self: center;
  color: #dbd6a9;
  :hover {
    color: #fff;
  }
  @media screen and (max-width: 475px) {
    font-size: 1.4rem;
  }
`;

export const AppIconsTitle = styled.h1`
  font-family: "Barlow";
  font-size: 1rem;
  /* color: #009a75; */
  color: #757575;
  text-align: center;

  @media screen and (max-width: 475px) {
    font-size: 0.8rem;
  }
`;
