import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const HeroContainer = styled.div`
  /* background: #0c0c0c; */
  background-color: #fff;
  display: flex;
  justify-content: center;

  padding: 0 30px;
  height: 110vh;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 768px) {
    overflow: hidden;
    height: 150vh;
  }
  @media screen and (max-width: 475px) {
    overflow: hidden;
    height: 110vh;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.img`
  width: 100%;
  height: 100%;
  display: flex;
  z-index: -1;
  position: absolute;
  object-fit: cover;
  object-position: center;
  background: #232a34;
`;

export const HeroProfileImage = styled.img`
  display: flex;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 50vh;
  border-radius: 0 55% 0 0;
  object-fit: cover;

  @media screen and (max-width: 475px) {
    height: 50vh;
    width: 100%;
  }
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  top: 30%;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroH1 = styled.h1`
  display: flex;
  font-family: "Work Sans", sans-serif;
  color: #dbd6a9;
  font-size: 75px;
  text-align: center;
  font-weight: normal;
  line-height: 2em;
  color: #fee;

  > b {
    font: 20 7vh "Raleway";
    color: #000;
    text-shadow: 0 -20px 100px, 0 0 2px, 0 0 1em #dbcc46, 0 0 0.5em #dbcc46,
      0 0 0.1em #dbcc46, 30px 15px 9px #000;

    > span {
      animation: blink linear infinite 2s;
    }
    > span:nth-of-type(2) {
      animation: blink linear infinite 3s;
    }
  }
  ::before {
    transform: scaleX(0);
    transform-origin: bottom right;
    color: white;
  }

  :hover::before {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  ::before {
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    inset: 0 0 0 0;
    background: #fcba03;
    z-index: -1;
    transition: transform 0.3s ease;
  }

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 475px) {
    font-size: 32px;
  }

  @keyframes blink {
    78% {
      color: inherit;
      text-shadow: inherit;
    }
    79% {
      color: #333;
    }
    80% {
      text-shadow: none;
    }
    81% {
      color: inherit;
      text-shadow: inherit;
    }
    82% {
      color: #333;
      text-shadow: none;
    }
    83% {
      color: inherit;
      text-shadow: inherit;
    }
    92% {
      color: #333;
      text-shadow: none;
    }
    92.5% {
      color: inherit;
      text-shadow: inherit;
    }
  }
`;

export const HeroP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;

  animation: transitionIn2 1s ease-in-out;

  @keyframes transitionIn2 {
    from {
      opacity: 0;
      transform: translateX(-200px);
    }

    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

export const InfoBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#fff" : "#dbd6a9")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#dbd6a9" : "#010606")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: 2px solid black;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  margin: 40px 0px;
  text-decoration: none;
  font-family: Raleway;
  transition: 0.5s;
  letter-spacing: 4px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#dbd6a9" : "#edecdf")};
    color: ${({ primary }) => (primary ? "#010606" : "#010606")};

    box-shadow: 0 0 5px #dbcc46, 0 0 25px #dbcc46, 0 0 50px #dbcc46,
      0 0 200px #dbcc46;
    -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
  }
  @media screen and (max-width: 768px) {
    justify-content: center;
    display: ${({ id }) => (id == "about" ? "none" : "flex")};
  }
`;
