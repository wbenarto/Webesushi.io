import React, { useState, useEffect } from "react";
import { Switch } from "react-router-dom";
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
      // console.log(window.scrollY);
    } else {
      setScrollNav("home");
      // console.log(window.scrollY);
    }
  };
  // console.log(scrollNav);

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  });

  const toggleHome = () => {
    scroll.scrollToTop({ duration: "3000" });
  };

  return (
    <Nav scrollNav={scrollNav}>
      <NavbarContainer>
        <Switch>
          <NavLogo to="/" onClick={toggleHome}>
            <img
              alt="webe-sushi"
              style={{ width: "100%", height: "100%" }}
              src={scrollNav == "white" ? webewhite : webewhite}
            ></img>
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
            // <h1 style={{ color: "white" }}>welcome</h1>
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
