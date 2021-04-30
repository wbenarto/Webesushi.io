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
  height: 300px;
  padding: 20px;
  margin: 10px;

  border: 2px solid black;
  background-color: ${({ rec }) =>
    rec == "Avoid" ? "red" : "rgba(10, 10, 10, 0.4)"};
  align-items: center;
  flex-direction: column;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? '"col2 col1"' : '"col1 col2"'};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? '"col1" "col2"' : '"col1 col1" "col2 col2"'};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.p`
  color: #dbd6a9;
  font-size: 24px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
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
