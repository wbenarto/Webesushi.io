import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: ${({ scrollNav }) =>
    scrollNav == "home"
      ? "transparent"
      : scrollNav == "middle"
      ? "#2c3138"
      : scrollNav == "white"
      ? "#2c3138"
      : "#010606"};

  height: 100px;
  margin-top: -100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: 0.8s all ease;
  font-family: "Work Sans", sans-serif;

  @media screen and (max-width: 768px) {
    height: 100px;
    margin-top: -100px;
  }

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 90px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  /* margin-top: 40px; */
  max-width: 1100px;
  @media screen and (max-width: 768px) {
    height: 100px;
  }
`;

export const NavLogo = styled(LinkR)`
  color: white;

  height: 150px;
  border-radius: 20px;
  width: 150px;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 3rem;
  display: flex;
  align-items: center;
  margin-top: -32px;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;

  @media screen and (max-width: 768px) {
    margin-left: -10px;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 2.2rem;
    cursor: pointer;
    color: #fff;
    z-index: 1000;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  color: #dbd6a9;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 5px solid #dbd6a9;
    background-color: #5c5b4f;

    border-radius: 5px;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
