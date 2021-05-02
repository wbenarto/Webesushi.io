import styled from "styled-components";
import { Link } from "react-router-dom";

export const InfoContainer = styled.div`
  color: #fff;
  /* background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")}; */
  background: linear-gradient(#b6d1e3, #ebf8e1, #2b495c);
  height: 100vh;
  width: 100vw;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  width: 70vw;
  overflow-x: scroll;
  margin: auto;
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
`;

export const TextWrapper = styled.div`
  width: 100%;
  min-height: 300px;
  padding: 10px;
  text-align: left;
  /* background-color: blue; */
`;

export const TopLine = styled.p`
  /* #dbd6a9 */

  color: ${({ rec }) => (rec == "Avoid" ? "black" : "#fff")};
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
  width: 100%;
  height: 100%;
  background-color: teal;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px;
  padding-right: 0;
`;

export const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 32px;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;
