import styled from "styled-components";
import Webe from "../../images/webe.png";
import { Link as LinkR } from "react-router-dom";

var intFrameHeight = window.innerHeight;
let test = "200px";
console.log(intFrameHeight);

export const HomemakaseContainer = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: #2c3138;

  justify-content: center;
`;

export const AppNav = styled.div`
  position: relative;
  width: 100vw;
  height: 80px;
  background-color: #2c3138;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const AppNavLogo = styled(LinkR)`
  height: 100px;
  width: 100px;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  color: #dbd6a9;

  padding: 20px;
`;

export const AppLogo = styled.img`
  width: 150px;
  height: 150px;
  margin-top: -25px;
`;

AppLogo.defaultProps = { src: Webe };

export const AppHeading = styled.h1`
  font-size: 1.2rem;
  display: flex;
  position: relative;
  just: center;
  color: #dbd6a9;
`;

export const AppDesc = styled.p`
  font-size: 1.8rem;
`;

export const AppMain = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: auto;
  max-width: 70vw;
  height: calc(100% - 145px);
  background-color: blue;

  @media screen and (max-width: 475px) {
    min-width: 90%;
  }
`;

export const AppFooter = styled.div`
  position: relative;
  width: 100vw;
  height: 50px;
  background-color: #2c3138;
  flex-shrink: 0;
  display: flex;
  justify-content: space-evenly;
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
  color: #dbd6a9;

  /* background-color: #2c3138; */
`;

export const AppIconsTitle = styled.div`
  font-size: 0.6rem;
  color: white;
  text-align: center;
`;
