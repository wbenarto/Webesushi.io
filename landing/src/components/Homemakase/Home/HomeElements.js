import styled from "styled-components";

export const Steps = styled.h3`
  border-radius: 50px;
  height: 30px;
  width: 30px;
  border: 2px solid #757575;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  background-color: #dbd6a9;
`;

export const HomeInfo = styled.div`
  max-width: 700px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  margin: auto;
  border-bottom: double 2px #757575;
  text-align: center;

  > p {
    padding-bottom: 10px;
  }

  @media screen and (max-width: 475px) {
    width: 100%;
  }
`;

export const SushiCategoryButton = styled.div`
  flex-basis: 25%;
  height: 2rem;
  font-size: 1.2rem;
  background-color: transparent;
  color: black;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 475px) {
    font-size: 0.9rem;
  }
`;

export const HomeH2 = styled.h2`
  font-size: 1.5rem;
  padding-bottom: 10px;
`;

export const HomeP = styled.p`
  line-height: 35px;
  @media screen and (min-width: 475px) {
    font-size: 1.4rem;
    line-height: 45px;
  }
`;

export const CartContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 50px;

  padding: 5px 0;
`;

export const CartImage = styled.img`
  height: 100%;
`;

export const CartP = styled.p`
  align-items: center;
  display: flex;
  width: 30%;
  padding-left: 10px;
`;

export const CartIcon = styled.div`
  width: 50px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
  color: red;
`;

export const CartButtons = styled.div`
  display: flex;
  flex-direction: row;
  width: 43%;

  align-items: center;
  justify-content: space-between;
  right: 0;
`;

export const CartButton = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
  font-size: 1.6rem;

  :nth-child(1) {
    color: green;
  }
`;
