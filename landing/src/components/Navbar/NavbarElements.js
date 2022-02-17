import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const Nav = styled.nav`
  background: ${({ scrollNav }) =>
    scrollNav == "home"
      ? "transparent"
      : scrollNav == "middle"
      ? "rgba(10,10,10,0.8)"
      : scrollNav == "white"
      ? "rgba(10,10,10,0.8)"
      : "#010606"};

  height: 100px;
  margin-top: -100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: 0.8s all ease;
  font-family: "Work Sans", sans-serif;

  @media screen and (max-width: 475px) {
    height: 50px;
  }
`;


export const NavLogo = styled(LinkR)`
  color: white;
  height: 100%;
  cursor: pointer;
  display: flex;
  margin-left: 32px;
  @media screen and (max-width: 768px) {
    margin-left: 10px;
  }
`;

export const NavImg = styled.img`
  width: 160px;
  height: 90px;
  padding: 10px;
  object-fit: cover;

  @media screen and (max-width: 768px) {
    width: 140px;
    height: 100px;
  }
`;


export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 40px;
  color: white;
  background-color: black;
  border-radius: 50px;
  cursor: pointer;
  white-space: nowrap;
  padding: 10px 22px;

  @keyframes pulse {
	25% {
		transform: scale(1.1);
	}

	75% {
		transform: scale(.9);
	}
}
  
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #dbd6a9;
    color: black;
    animation-name: pulse;
		animation-duration: 1s;
		animation-timing-function: linear;
		animation-iteration-count: infinite;
    border: 1px solid black;

    >a {
      color:black;
    }
  }

  @media screen and (max-width: 768px) {
    margin-top: 10px;
    margin-right: 20px;
  }
`;

export const NavBtnLink = styled(LinkR)`
  color: white;
  font-size: 16px;
  outline: none;
  border: none;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  @media screen and (max-width: 768px) {
    font-size: .8em;
  }

`;
