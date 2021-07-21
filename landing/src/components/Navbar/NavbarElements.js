import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

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
  justify-content: center;
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

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;

  @media screen and (max-width: 768px) {
    height: 50px;
    padding-bottom: 0px;
  }
`;

export const NavLogo = styled(LinkR)`
  color: white;
  height: 100%;
  cursor: pointer;
  display: flex;
  margin-left: 32px;
  @media screen and (max-width: 768px) {
    margin-left: 0;
  }
`;

export const NavImg = styled.img`
  width: 160px;
  height: 90px;
  padding: 10px;
  object-fit: cover;

  @media screen and (max-width: 768px) {
    width: 100px;
    height: 60px;
  }

  @media screen and (max-width: 475px) {
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    margin-top: -7px;
    right: 0;
    margin-right: 10px;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #dbd6a9;
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
    /* background-color: #5c5b4f; */

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

  white-space: nowrap;
  padding: 10px 22px;
  color: white;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* background: #dbd6a9; */
  background-color: black;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: black;
    color: white;
  }

  @media screen and (max-width: 768px) {
    width: 50%;
    margin: auto;
  }
`;
