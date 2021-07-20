import styled from "styled-components";

export const HeroContainer = styled.div`
  /* background: #0c0c0c; */
  background-color: #fff;
  display: flex;
  justify-content: center;

  padding: 0 30px;
  height: 110vh;
  position: relative;
  z-index: 1;

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
  /* 
  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        -180deg,
        rgba(0, 0, 0, 0.1) 40%,
        rgba(0, 0, 0, 0.8) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  } */

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
  height: 30vh;
  width: 100%;
  border-radius: 15% 55% 0 0;
  object-fit: cover;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  top: 40%;
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
`;
