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
import webe from "../../images/webe.png";

const Navbar = (props) => {
  return (
    <Nav>
      <NavbarContainer>
        {/* <header className="App-header">Webe Sushi</header> */}
        <NavLogo to="/">
          Webe Sushi
          {/* <img
            alt="webe-sushi"
            style={{ width: "100%", height: "100%" }}
            src={webe}
          ></img> */}
        </NavLogo>
        <MobileIcon onClick={props.toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to="about">About</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="recipes">Recipes</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="gallery">Gallery</NavLinks>
          </NavItem>
        </NavMenu>
        {/* <NavBtn>
          
        </NavBtn> */}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
