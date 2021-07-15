import React, { useState, useEffect } from "react";
import Shop from "../components/Homemakase/Shopping/Shop";
import Home from "../components/Homemakase/Home/Home";
import Recipe from "../components/Homemakase/Recipe/Recipe";
import Profile from "../components/Homemakase/Profile/Profile";
import {
  FaChevronLeft,
  FaHome,
  FaStore,
  FaTape,
  FaUserAlt,
} from "react-icons/fa";
import Badge from "@material-ui/core/Badge";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getSushis } from "../redux/actions/dataActions";
import {
  HomemakaseContainer,
  AppNav,
  AppNavLogo,
  AppMain,
  AppHeading,
  AppFooter,
  AppIconsWrapper,
  AppIcons,
  AppIconsTitle,
} from "../components/Homemakase/HomemakaseElements";

const HomeMakase = (props) => {
  const [active, setActive] = useState("/");

  useEffect(() => {
    props.getSushis();
  }, []);

  return (
    <>
      <HomemakaseContainer active={active}>
        <AppNav>
          <AppNavLogo to="/">
            <FaChevronLeft />
          </AppNavLogo>
          <AppHeading>HOME-MAKASE</AppHeading>
        </AppNav>

        <AppMain>
          {active == "home" ? (
            <Home />
          ) : active == "shop" ? (
            <Shop />
          ) : active == "profile" ? (
            <Profile props={props} />
          ) : (
            <Recipe />
          )}
        </AppMain>

        <AppFooter>
          <AppIconsWrapper onClick={() => setActive("/")}>
            <AppIcons>
              <FaHome />
            </AppIcons>
            <AppIconsTitle>Home</AppIconsTitle>
          </AppIconsWrapper>

          <AppIconsWrapper onClick={() => setActive("home")}>
            <AppIcons>
              <Badge
                color="secondary"
                badgeContent={
                  props.data.shoppingCart ? props.data.shoppingCart.length : 0
                }
              >
                <FaTape />
              </Badge>
            </AppIcons>
            <AppIconsTitle>Recipes</AppIconsTitle>
          </AppIconsWrapper>

          <AppIconsWrapper onClick={() => setActive("shop")}>
            <AppIcons>
              <FaStore />
            </AppIcons>
            <AppIconsTitle>Shopping List</AppIconsTitle>
          </AppIconsWrapper>

          <AppIconsWrapper onClick={() => setActive("profile")}>
            <AppIcons>
              <FaUserAlt />
            </AppIcons>
            <AppIconsTitle>Profile</AppIconsTitle>
          </AppIconsWrapper>
        </AppFooter>
      </HomemakaseContainer>
    </>
  );
};

HomeMakase.propTypes = {
  getSushis: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({ data: state.data });

export default connect(mapStateToProps, { getSushis })(HomeMakase);
