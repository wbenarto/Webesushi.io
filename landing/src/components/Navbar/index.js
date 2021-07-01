import React, { useState, useEffect } from "react";
import { Switch } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavImg,
  MobileIcon,
  NavLinks,
  NavMenu,
  NavItem,
  NavBtnLink,
  NavBtn,
} from "./NavbarElements";

import webegold from "../../images/wbgold.png";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Navbar = (props) => {
  const [scrollNav, setScrollNav] = useState("home");

  const { imageUrl, authenticated } = props;

  console.log(imageUrl, authenticated);
  const changeNav = () => {
    if (window.scrollY >= 4000) {
      setScrollNav("black");
    } else if (window.scrollY >= 3240) {
      setScrollNav("white");
    } else if (window.scrollY >= 900) {
      setScrollNav("middle");
    } else {
      setScrollNav("home");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop({ duration: "1000" });
  };

  return (
    <Nav scrollNav={scrollNav}>
      <NavbarContainer>
        <Switch>
          <NavLogo to="/" onClick={toggleHome}>
            <NavImg
              alt="webe-sushi"
              src={scrollNav == "white" ? webegold : webegold}
            ></NavImg>
          </NavLogo>
        </Switch>

        <MobileIcon onClick={props.toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <Switch>
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
            </Switch>
          </NavItem>

          <NavItem>
            <Switch>
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
            </Switch>
          </NavItem>

          <NavItem>
            <Switch>
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
            </Switch>
          </NavItem>

          <NavItem>
            <Switch>
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
            </Switch>
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

        <NavBtn>
          {authenticated ? (
            <a href="/profile">
              <img
                src={imageUrl}
                style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              />
            </a>
          ) : (
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          )}
        </NavBtn>
      </NavbarContainer>
    </Nav>
  );
};

Navbar.propTypes = {
  authenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  imageUrl: state.user.credentials.imageUrl,
  authenticated: state.user.authenticated,
});

export default connect(mapStateToProps)(Navbar);
