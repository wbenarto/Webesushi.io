import React, { useState } from "react";

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

const HomeMakase = () => {
  const [active, setActive] = useState("/");

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
            <Recipe />
          ) : active == "shop" ? (
            <Shop />
          ) : active == "profile" ? (
            <Profile />
          ) : (
            <Home />
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
              <FaTape />
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

export default HomeMakase;
