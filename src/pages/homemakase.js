import React, { useState, useEffect } from "react";
import Ingredients from "../components/Homemakase/Ingredients/Ingredients";
import ShoppingList from "../components/Homemakase/ShoppingList/ShoppingList";
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
          {active == "shoppingList" ? (
            <ShoppingList />
          ) : active == "ingredients" ? (
            <Ingredients />
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
            <AppIconsTitle>Recipes</AppIconsTitle>
          </AppIconsWrapper>

          <AppIconsWrapper onClick={() => setActive("shoppingList")}>
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
            <AppIconsTitle>Shopping List</AppIconsTitle>
          </AppIconsWrapper>

          <AppIconsWrapper onClick={() => setActive("ingredients")}>
            <AppIcons>
              <FaStore />
            </AppIcons>
            <AppIconsTitle>Ingredients</AppIconsTitle>
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
