import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavLogo,
  NavImg,
  NavBtnLink,
  NavBtn,
} from "./NavbarElements";

import webegold from "../../images/wbgold.png";
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
          <NavLogo to="/" onClick={toggleHome}>
            <NavImg
              alt="webe-sushi"
              src={scrollNav == "white" ? webegold : webeblack}
            ></NavImg>
          </NavLogo>

        <NavBtn>
          {authenticated ? (
            <img
              src={imageUrl}
              style={{ width: "50px", height: "50px", borderRadius: "50%" }}
            />
          ) : (
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          )}
        </NavBtn>
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
