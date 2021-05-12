import styled from "styled-components";
import { Link } from "react-router-dom";
import market from "../../images/market.jpg";
/* #dbd6a9 */

export const InfoContainer = styled.div`
  color: #fff;
  position: absolute;
  width: 100%;
  height: 200vh;

  @media screen and (max-width: 768px) {
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  width: 90vw;
  height: 1500px;
  flex-direction: column;
  margin: auto;
  border-radius: 50px;
  padding-top: 60px;
`;

export const InfoHeroSection = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  max-width: 100%;
  height: 1300px;
  background-color: rgba(10, 10, 10, 0.8);
  object-fit: cover;
  object-position: top right;
`;

export const HeroImg = styled.img`
  display: flex;
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
  z-index: -1;
  justify-content: center;
  /* background-color: rgba(10, 10, 10, 0.2); */
`;
export const InfoCanvas = styled.div`
  width: 50%;
  height: 100%;

  position: absolute;
  right: ${({ props }) => (props == 1 ? "0" : "")};
  z-index: -1;
`;

export const Solution = styled.div`
  width: 80%;
  height: 50px;
  font-family: sans-serif;
  padding: 10px;
  margin: 60px auto;
  font-size: 32px;
  display: flex;
  position: relative;
  align-items: center;
`;

export const InfoHeading = styled.h1`
  height: 180px;
  width: 50%;
  display: flex;
  position: absolute;
  padding: 15px;
  border-bottom: 0.5px solid white;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  margin: 40px;
  text-align: bottom;
  right: ${({ props }) => (props == 1 ? "" : "0")};
  color: white;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const InfoSub = styled.p`
  width: 50%;
  height: 350px;
  margin: 0 0px;
  position: absolute;
  display: flex;
  top: 230px;
  right: ${({ props }) => (props == 1 ? "" : "0")};
  left: ${({ props }) => (props == 1 ? "0" : "")};
  /* background-color: rgba(10, 10, 10, 0.4); */
  font-size: 28px;
  line-height: 1.5em;
  padding: 40px;
`;

export const SushiSeafood = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 650px;
`;

export const SeafoodFilter = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 650px;
  min-width: 200px;
  max-width: 200px;
  background-color: rgba(10, 10, 10, 0.8);
`;

export const SeafoodDisplay = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  min-height: 650px;

  ::-webkit-scrollbar-thumb {
    background-color: #dbd6a9;
    border-radius: 50px;
  }
`;

export const FilterButton = styled.div`
  display: flex;
  width: 70%;
  height: 30px;
  border-radius: 30px;
  background-color: rgba(10, 10, 10, 0.5);
  padding: 10px;
  margin: 10px auto;
  justify-content: center;
  align-items: center;
  color: #dbd6a9;

  :hover {
    background-color: #dbd6a9;
    color: black;
    transform: scale(1.4);
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  position: relative;
  max-width: 300px;
  min-width: 300px;
  height: 600px;
  padding: 20px;
  margin: 10px;

  border: 0.5px solid black;
  background-color: ${({ rec }) =>
    rec == "Avoid" ? "#e3595d" : "rgba(10, 10, 10, 0.8)"};
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

export const Heading = styled.h1`
  height: 80px;
  display: flex;
  align-items: center;
  padding: 5px;

  border-radius: 10px;
  border-bottom: 0.5px solid white;
  font-size: 32px;
  line-height: 1.1;
  font-weight: 600;
  color: white;
  margin-bottom: 10px;
  text-align: center;
  justify-content: center;

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
