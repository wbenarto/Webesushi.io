import styled from "styled-components";
import Webe from "../../images/tools1.jpg";
import misc from "../../images2/raw/misc.jpg";
import dish from "../../images2/homemakase3.jpg";
// import Webe from "../../images/nigiriplate.jpg";
import { Link as LinkR } from "react-router-dom";

var intFrameHeight = window.innerHeight;
// console.log(intFrameHeight);

export const HomemakaseContainer = styled.div`
  position: absolute;
  width: 100vw;
  height: 100%;

  /* background-color: #2c3138; */
  /* background-image: url(${Webe}); */
  background-image: ${({ active }) =>
    active == "/"
      ? `url(${Webe})`
      : active == "home"
      ? `url(${dish})`
      : active == "shop"
      ? `url(${misc})`
      : `url(${Webe})`};
  background-position: center;

  background-position: left;

  justify-content: center;

  ::before {
    content: "";
    background-color: rgba(0, 0, 0, 0.6);
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
  /* height: 50px; */
  height: 7vh;
  background-color: transparent;
  /* #2c3138 */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
// rgba(22, 22, 23, 0.5)

export const AppNavLogo = styled(LinkR)`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  color: #000;
  padding: 20px;
`;

export const AppLogo = styled.img`
  width: 150px;
  height: 150px;
  margin-top: -25px;
`;

// AppLogo.defaultProps = { src: Webe };

export const AppHeading = styled.h1`
  font-size: 1rem;
  display: flex;
  position: relative;
  justify-content: center;
  color: #000;
`;

export const AppDesc = styled.p`
  font-size: 1.8rem;
`;

export const AppMain = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: auto;
  width: 70%;

  height: calc(100vh - 15vh);
  background-color: rgba(10, 10, 10, 0.5);
  /* #a5b4cc; */
  overflow: scroll;
  color: white;
  ::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 475px) {
    min-width: 90%;
    height: calc(100vh - 28vh);
  }
`;

export const AppFooter = styled.div`
  position: relative;
  margin: auto;
  max-width: 70vw;
  height: 8vh;
  background-color: rgba(10, 10, 10, 0.8);

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
  font-size: 1.6rem;
  margin-top: 15px;
  text-align: center;
  align-self: center;
  color: #dbd6a9;

  /* background-color: #2c3138; */
`;

export const AppIconsTitle = styled.div`
  font-size: 1.1rem;
  color: white;
  text-align: center;

  @media screen and (max-width: 475px) {
    font-size: 0.6rem;
  }
`;

export const SushiCategory = styled.div`
  margin-top: 25px;
  width: 100%;
  height: 100px;
  justify-self: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const SushiCategoryButton = styled.div`
  flex-basis: 25%;
  height: 2rem;

  font-size: 1.2rem;
  background-color: transparent;
  color: black;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  :nth-child(1) {
    background-color: #db405f;
  }
  :nth-child(2) {
    background-color: #eded4a;
  }
  :nth-child(3) {
    background-color: #8df27e;
  }
`;

export const SushiCategoryDesc = styled.div`
  width: 90%;

  position: relative;
  top: 0;
  color: ${({ cat }) =>
    cat == "raw"
      ? "white"
      : cat == "cooked"
      ? "black"
      : cat == "vegetarian"
      ? "black"
      : "white"};

  background-color: ${({ cat }) =>
    cat == "raw"
      ? "#db405f"
      : cat == "cooked"
      ? "#eded4a"
      : cat == "vegetarian"
      ? "#8df27e"
      : "#db405f"};
  border-radius: 5px;

  > p {
    margin-bottom: 10px;
    padding: 10px;
  }

  @media screen and (max-width: 475px) {
    margin-bottom: 0;
  }
`;
