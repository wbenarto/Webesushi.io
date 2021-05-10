import styled from "styled-components";
import { Link } from "react-router-dom";
import market from "../../images/market.jpg";
/* #dbd6a9 */

export const InfoContainer = styled.div`
  color: #fff;
  /* background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")}; */
  /* background: linear-gradient(#b6d1e3, #ebf8e1, #2b495c); */
  height: 1300vh;
  width: 100%;

  @media screen and (max-width: 768px) {
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  width: 90vw;
  height: 90%;
  /* background-color: purple; */
  flex-direction: column;
  margin: auto;
  border-radius: 50px;
  padding-top: 60px;
  > h1 {
    color: black;
  }
  > h2 {
    color: gray;
    padding: 20px;
    /* background-color: rgba(10, 10, 10, 0.9); */
    border-radius: 10px;
  }
`;

export const SushiSeafood = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: scroll;

  ::-webkit-scrollbar-thumb {
    background-color: #dbd6a9;
    border-radius: 50px;
  }
`;

export const SeafoodFilter = styled.div`
  width: 100%;
  height: 200px;
  /* background-color: purple; */
  display: flex;
  flex-direction: column;
`;

export const SpeciesFilter = styled.div`
  width: 100%;
  height: 100px;
  /* background-color: teal; */
`;

export const AdditionalFilter = styled.div`
  display: flex;
  flex-direction: row;
`;

export const PopulationFilter = styled.div`
  width: 50%;
  height: 70px;
  /* background-color: green; */
  display: flex;
`;

export const MethodFilter = styled.div`
  width: 50%;
  height: 70px;
  /* background-color: yellow; */
  display: flex;
`;

export const CardWrapper = styled.div`
  display: flex;
  position: relative;
  min-width: 400px;
  height: 600px;
  padding: 20px;
  margin: 10px;

  border: 0.5px solid black;
  background-color: ${({ rec }) =>
    rec == "Avoid" ? "#e3595d" : "rgba(10, 10, 10, 0.4)"};
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
`;

export const TextWrapper = styled.div`
  width: 100%;
  min-height: 310px;
  padding: 10px;
  text-align: left;
  /* background-color: blue; */
`;

export const TopLine = styled.p`
  color: ${({ rec }) => (rec == "Avoid" ? "black" : "#4ced59")};
  font-size: ${({ rec }) => (rec == "Avoid" ? "40px" : "24px")};
  font-weight: 700;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  display: flex;
  position: absolute;
  padding-bottom: 20px;
  margin: auto;
  bottom: 0;
`;

export const Reason = styled.div`
  font-size: 20px;
  padding: 20px;
  height: 140px;
  overflow-y: scroll;

  color: white;
  text-align: center;
  background-color: ${({ avoid }) =>
    avoid == "" ? "none" : "rgba(10, 10, 10, 0.2)"};
`;

export const HeroSlider = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 50px;
  bottom: 0;
  background-color: rgba(10, 10, 10, 0.2);
  justify-content: center;
`;

export const InfoHeroSection = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  max-width: 100%;
  height: 1200px;
  background-color: rgba(10, 10, 10, 0.2);
  object-fit: cover;
  object-position: top right;
`;

export const SustainableControl = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50px;
  padding: 20px;

  justify-content: space-evenly;
  margin-bottom: 40px;

  > div {
    font-size: 32px;
    height: 60px;
    background-color: rgba(10, 10, 10, 0.4);
    border-radius: 10px;
    color: #dbd6a9;
    padding: 10px;
  }
`;

export const HeroImg = styled.img`
  display: flex;
  /* position: relative; */
  position: absolute;
  width: 100%;
  /* height: 100%; */
  object-fit: cover;
  z-index: -1;

  /* top: ${({ num }) =>
    num == 1 ? "0px" : num == 2 ? "2000px" : num == 3 ? "1760px" : ""}; */

  /* background-color: rgba(10, 10, 10, 0.2); */
`;

export const InfoHeading = styled.h1`
  height: 180px;
  width: 50%;
  display: flex;
  position: absolute;
  padding: 15px;
  background-color: rgba(99, 99, 99, 0.5);
  border-bottom: 0.5px solid white;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  margin: 30px 40px;
  text-align: bottom;

  color: white;

  /* color: ${({ lightText }) => (lightText ? "#010606" : "#f7f8fa")}; */

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const InfoSub = styled.p`
  width: 50%;
  position: absolute;
  display: flex;
  top: 190px;
  left: 40px;
  background-color: rgba(10, 10, 10, 0.4);
  font-size: 24px;
  line-height: 1.5em;
  padding: 40px;
`;

export const Heading = styled.h1`
  height: 80px;
  display: flex;
  /* position: absolute; */
  align-items: center;
  padding: 5px;
  /* background-color: gold; */
  border-radius: 10px;
  border-bottom: 0.5px solid white;
  font-size: 32px;
  line-height: 1.1;
  font-weight: 600;
  color: black;
  margin-bottom: 10px;
  text-align: center;
  justify-content: center;
  /* color: ${({ lightText }) => (lightText ? "#010606" : "#f7f8fa")}; */

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 5px;
  font-size: 16px;
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
  > span {
    font-size: 20px;
    color: gold;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  margin-top: -40px;
  width: 100%;
  max-height: 200px;
`;

export const Img = styled.img`
  width: 100%;
  /* background-color: rgba(10, 10, 10, 0.2); */
`;

export const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 32px;

  @media screen and (max-width: 480px) {
  }
`;
