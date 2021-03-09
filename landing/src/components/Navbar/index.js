import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavLinks,
  NavMenu,
  NavItem,
  NavImg,
  NavBtnLink,
  NavBtn,
} from "./NavbarElements";
import webewhite from "../../images/webewhite.png";
import webeblack from "../../images/webe.png";

const Navbar = (props) => {
  const [scrollNav, setScrollNav] = useState("home");

  const changeNav = () => {
    if (window.scrollY >= 4120) {
      setScrollNav("black");
    } else if (window.scrollY >= 3240) {
      setScrollNav("white");
    } else if (window.scrollY >= 900) {
      setScrollNav("middle");
      console.log(window.scrollY);
    } else {
      setScrollNav("home");
      console.log(window.scrollY);
    }
  };
  console.log(scrollNav);

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop({ duration: "3000" });
  };

  return (
    <Nav scrollNav={scrollNav}>
      <NavbarContainer>
        {/* <header className="App-header">Webe Sushi</header> */}
        <NavLogo to="/" onClick={toggleHome}>
          {/* WeBe Sushi */}
          <img
            alt="webe-sushi"
            style={{ width: "100%", height: "100%" }}
            src={scrollNav == "white" ? webewhite : webewhite}
          ></img>
        </NavLogo>
        <MobileIcon onClick={props.toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks
              to="home-makase"
              smooth={true}
              duration={1200}
              spy={true}
              exact="true"
              offset={0}
              activeClass="active"
            >
              Home-Makase
            </NavLinks>
          </NavItem>

          <NavItem>
            <NavLinks
              to="sustainability"
              smooth={true}
              duration={1200}
              spy={true}
              exact="true"
              offset={0}
              activeClass="active"
            >
              Sustainability
            </NavLinks>
          </NavItem>

          <NavItem>
            <NavLinks
              to="about"
              smooth={true}
              duration={1200}
              spy={true}
              exact="true"
              offset={0}
              activeClass="active"
            >
              About
            </NavLinks>
          </NavItem>

          <NavItem>
            <NavLinks
              to="gallery"
              smooth={true}
              duration={1200}
              spy={true}
              exact="true"
              offset={0}
              activeClass="active"
            >
              Gallery
            </NavLinks>
          </NavItem>

          <NavItem>
            <NavLinks
              to="services"
              smooth={true}
              duration={1200}
              spy={true}
              exact="true"
              offset={0}
              activeClass="active"
            >
              Mission
            </NavLinks>
          </NavItem>
        </NavMenu>

        {/* <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn> */}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
