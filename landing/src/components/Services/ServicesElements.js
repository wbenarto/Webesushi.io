import styled from "styled-components";

export const ServicesContainer = styled.div`
  height: 100vh;
  scroll-snap-align: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;

  @media screen and (max-width: 475px) {
    justify-content: center;
  }
  @media screen and (max-width: 768px) {
    margin-left: 0px;
    overflow: hidden;
  }
`;

export const ServicesCard = styled.div`
  background: transparent;
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  height: 200px;
  padding-right: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all ease-out 0.2s ease-in-ease-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
  @media screen and (max-width: 475px) {
    padding: 0;
  }
`;

export const ServicesIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #dbd6a9;
  margin-bottom: 40px;
  margin-top: 300px;

  @media screen and (max-width: 475px) {
    font-size: 2.3rem;
    margin-top: 150px;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 1.4rem;
  margin-bottom: 40px;
  color: #fff;
  border-bottom: 2px solid #dbd6a9;
`;

export const ServicesP = styled.p`
  font-size: 2.2rem;
  text-align: center;

  padding-top: 60px;
  color: #fff;
  @media screen and (max-width: 475px) {
    width: 50vw;
    text-align: center;
    line-height: 3rem;
    overflow: hidden;
    font-size: 1.3rem;
  }
`;
