import styled from "styled-components";

export const ServicesContainer = styled.div`
  height: 100vh;
  padding: 10px;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: gray;
`;

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #dbd6a9;

  @media screen and (max-width: 475px) {
    font-size: 1.8rem;
  }
`;

export const ServicesP = styled.p`
  font-size: 2.2rem;
  text-align: center;

  padding-top: 60px;
  color: #fff;
  @media screen and (max-width: 475px) {
    width: 90vw;

    text-align: center;
    line-height: 3rem;
    overflow: hidden;
    font-size: 1.1rem;
  }
`;
