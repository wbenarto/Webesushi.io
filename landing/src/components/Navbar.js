import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavLinks,
  NavMenu,
  NavItem,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <Nav>
      <NavbarContainer>
        {/* <header className="App-header">Webe Sushi</header> */}
        <NavLogo to="/">Webe Sushi</NavLogo>
        <MobileIcon>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to="/about">About</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/recipes">Recipes</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/gallery">Gallery</NavLinks>
          </NavItem>
        </NavMenu>
        {/* <NavBtn>
          
        </NavBtn> */}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
