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
  @media screen and (max-width: 475px) {
    font-size: 1rem;
  }
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
  height: 100px;
  background-color: rgba(201, 209, 167, 0.2);
  margin: 5px 0;
  border-radius: 20px;

  @media screen and (max-width: 475px) {
    height: 50px;
  }
`;

export const CartImage = styled.img`
  height: 100%;

  width: 200px;

  object-fit: cover;
  :hover {
    cursor: pointer;
    transform: scale(2.5);
    transition: 0.1s ease-in-out;
    z-index: 1;
    border-radius: 10px;
  }

  @media screen and (max-width: 475px) {
    width: 80px;
  }
`;

export const CartP = styled.p`
  align-items: center;
  display: flex;
  width: 30%;
  padding-left: 10px;
  border-radius: 20px;
  font-size: 1.4rem;
  background-color: ${({ checked }) => (checked ? "#7be890" : "transparent")};
  transition: 0.6s;
  :hover {
    animation: runanim 1.7s ease-in-out;
    background-color: #ecf0eb;
    cursor: pointer;
  }

  @keyframes runanim {
    100% {
      background-color: linear-gradient(0.25turn, #ecf0eb, #ebf8e1, #dbd6a9);
    }
  }

  @media screen and (max-width: 475px) {
    font-size: 0.8rem;
  }
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
  justify-content: flex-end;
  right: 0;
`;

export const CartButton = styled.div`
  display: flex;
  padding: 5px;
  width: 50%;
  justify-content: center;
  font-size: 1rem;
  transition: 0.3s;
  :hover {
    cursor: pointer;
  }
  :nth-child(1) {
    font-size: 2rem;
    color: #32b84c;
    border-radius: 50px;
    :focus {
      box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1);
      border: 2px solid #c1e0bc;

      color: pink;
      animation: anim-shadow 0.3s forwards;
    }
    :hover {
      box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1);

      animation: anim-shadow 0.3s forwards;
    }
    @media screen and (max-width: 475px) {
      font-size: 1.4rem;
    }
  }

  :nth-child(2) {
    color: #eb4034;
    font-size: 1.2rem;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    align-items: center;
    transition: 0.2s ease-in-out;

    :focus {
      border: 2px solid #eb4034;
      text-align: center;
      background-color: #ecf0eb;
    }
    :hover {
      border: 2px solid #eb4034;
      text-align: center;
      background-color: #ecf0eb;
    }

    @media screen and (max-width: 475px) {
      font-size: 0.8rem;
    }
  }

  @keyframes anim-shadow {
    100% {
      box-shadow: 0px 0px 10px 10px #c1e0bc;
    }
  }
`;
