import styled from "styled-components";
import { Link } from "react-router-dom";

/* #dbd6a9 */

export const InfoContainer = styled.div`
  color: #fff;
  /* background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")}; */
  background: linear-gradient(#b6d1e3, #ebf8e1, #2b495c);
  height: 100%;
  width: 100%;

  @media screen and (max-width: 768px) {
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  width: 90vw;
  height: 100%;
  /* background-color: purple; */
  flex-direction: column;
  margin: auto;
  border-radius: 50px;
  padding-top: 20px;
  > h1 {
    color: black;
  }
  > h2 {
    color: #eb4034;
    background-color: rgba(10, 10, 10, 0.9);
    border-radius: 10px;
  }
`;

export const SushiSeafood = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
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

export const Heading = styled.h1`
  height: 80px;
  display: flex;
  align-items: center;
  padding: 5px;
  /* background-color: gold; */
  border-radius: 10px;
  border-bottom: 0.5px solid white;
  font-size: 32px;
  line-height: 1.1;
  font-weight: 600;
  color: gold;
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
