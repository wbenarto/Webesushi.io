import styled from "styled-components";
import { Link } from "react-router-dom";
import market from "../../images/market.jpg";
/* #dbd6a9 */

export const InfoContainer = styled.div`
  color: #fff;
  height: 100vh;

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
  background-color: rgba(10, 10, 10, 0.2);
  object-fit: cover;
  object-position: top right;
`;

// export const SustainableControl = styled.div`
//   display: flex;
//   flex-direction: row;
//   width: 100%;
//   height: 50px;
//   padding: 20px;
//   justify-content: space-evenly;
//   margin-bottom: 40px;

//   > div {
//     font-size: 32px;
//     height: 60px;
//     background-color: rgba(10, 10, 10, 0.4);
//     border-radius: 10px;
//     color: #dbd6a9;
//     padding: 10px;
//   }
// `;

export const HeroImg = styled.img`
  display: flex;
  position: absolute;
  width: 100%;
  object-fit: cover;
  z-index: -1;
  /* background-color: rgba(10, 10, 10, 0.2); */
`;
export const InfoCanvas = styled.div`
  width: 50%;
  height: 100%;
  position: absolute;
  background-color: pink;
  right: ${({ props }) => (props == 1 ? "0" : "")};
  z-index: -1;
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
  margin: 0 40px;
  position: absolute;
  display: flex;
  top: 230px;
  right: ${({ props }) => (props == 1 ? "" : "0")};
  left: ${({ props }) => (props == 1 ? "0" : "")};
  background-color: rgba(10, 10, 10, 0.4);
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
  overflow: scroll;
`;

export const SeafoodDisplay = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  min-height: 650px;
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
