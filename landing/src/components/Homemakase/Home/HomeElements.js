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
  /* background-color: ${({ checked }) => (checked ? "#7be890" : "#fff")}; */
  padding: 5px 0;
`;

export const CartImage = styled.img`
  height: 100%;
  padding-right: 10px;
  width: 80px;
  object-fit: cover;
`;

export const CartP = styled.p`
  align-items: center;
  display: flex;
  width: 30%;
  padding-left: 10px;
  background-color: ${({ checked }) => (checked ? "#7be890" : "#fff")};
`;

export const CartIcon = styled.div`
  width: 50px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  color: #db574d;
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
    color: #32b84c;
  }
`;
