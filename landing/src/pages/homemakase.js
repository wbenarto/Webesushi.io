import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Sidebar from "../components/Sidebar/index";
import Shop from "../components/Homemakase/Shop";
import Home from "../components/Homemakase/Home";
import Navbar from "../components/Navbar/index";
import webewhite from "../images/webe.png";
import { FaChevronLeft, FaHome, FaStore, FaTape } from "react-icons/fa";
import {
  HomemakaseContainer,
  AppNav,
  AppNavLogo,
  AppLogo,
  AppMain,
  AppHeading,
  AppDesc,
  AppFooter,
  AppIconsWrapper,
  AppIcons,
  AppIconsTitle,
  SushiCategory,
  SushiCategoryButton,
  SushiCategoryDesc,
} from "../components/Homemakase/HomemakaseElements";

import {
  Nav,
  NavbarContainer,
  NavLogo,
} from "../components/Navbar/NavbarElements";

const HomeMakase = () => {
  const [active, setActive] = useState("/");
  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState("raw");

  const toggle = () => {
    setIsOpen(!isOpen);
    console.log("pressed = " + isOpen);
  };
  const handleClick = (page) => {
    setActive(page);
    console.log(page);
  };

  const handleCategory = (category) => {
    console.log(category);
    setCategory(category);
  };
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
          ) : (
            <div class="parent-container">
              <h2>Omakase</h2>
              <p>
                Omakase (Japanese: お任せ, Hepburn: o-makase) is a Japanese
                phrase, used when ordering sushi in restaurants, that means
                'I'll leave it up to you' (from Japanese 'to entrust' (任せる,
                makaseru)).
              </p>
              <br />
              <h2>Homemakase</h2>
              <p>
                Here we will help you recreate your favorite sushi dish at the
                comfort of your home. <br />
                <br /> We will first take a look what kind of ingredients and
                tools needed before we start our prepping process.
              </p>
              <br />

              <h2>Let's get rollin!~</h2>
              <p>
                Go to "At Market" tab to see all necessary tools and ingredients
                to make your sushi. Then go to "Get Rollin" tab to access in
                depth step-by-step instruction for prepping your ingredients. I
                also included recipes for the sushi I have made in the past.
                Don't forget to try out the sauces recipes as well!
              </p>
              <br />

              <p>Here are some categories to help you navigate the site:</p>

              <SushiCategory>
                <SushiCategoryButton
                  cat={category}
                  onClick={() => handleCategory("raw")}
                >
                  Raw
                </SushiCategoryButton>
                <SushiCategoryButton
                  cat={category}
                  onClick={() => handleCategory("cooked")}
                >
                  Cooked
                </SushiCategoryButton>
                <SushiCategoryButton
                  cat={category}
                  onClick={() => handleCategory("vegetarian")}
                >
                  Vegetarian
                </SushiCategoryButton>
                {category == "raw" ? (
                  <SushiCategoryDesc cat={category}>
                    <p>
                      Everything shown in this category will be consisting of
                      raw ingredients. Consuming raw or undercooked meats,
                      poultry, seafood, shellfish, or eggs may increase your
                      risk of foodborne illness. Please always keep raw fish
                      under 41°F prior to serving and confirm with your fish
                      supplier if the product is safe for raw consumption.
                    </p>
                  </SushiCategoryDesc>
                ) : category == "cooked" ? (
                  <SushiCategoryDesc cat={category}>
                    <p>
                      So many people got introduced into eating sushi from their
                      first "Shrimp Tempura Roll". If you are not sure about
                      dealing with raw fish, selections in this category will
                      definitely give you some learning experience. If you are
                      not sure about dealing with raw fish, selections in this
                      category will definitely give you some learning
                      experience.{" "}
                    </p>
                  </SushiCategoryDesc>
                ) : category == "vegetarian" ? (
                  <SushiCategoryDesc cat={category}>
                    <p>
                      This category is for my vegetarian friends! We will
                      explore different ways of serving vegetarian sushi and
                      have fun with it. If you are vegan, we will provide more
                      recipes in the future. If you are not sure about dealing
                      with raw fish, selections in this category will definitely
                      give you some learning experience.{" "}
                    </p>
                  </SushiCategoryDesc>
                ) : (
                  <SushiCategoryDesc cat={category}>Raw</SushiCategoryDesc>
                )}
              </SushiCategory>
            </div>
          )}
        </AppMain>

        <AppFooter>
          <AppIconsWrapper onClick={() => setActive("/")}>
            <AppIcons>
              <FaHome />
            </AppIcons>
            <AppIconsTitle>HomeMakase</AppIconsTitle>
          </AppIconsWrapper>

          <AppIconsWrapper onClick={() => setActive("shop")}>
            <AppIcons>
              <FaStore />
            </AppIcons>
            <AppIconsTitle>At Market</AppIconsTitle>
          </AppIconsWrapper>

          <AppIconsWrapper onClick={() => setActive("home")}>
            <AppIcons>
              <FaTape />
            </AppIcons>
            <AppIconsTitle>Get Rollin</AppIconsTitle>
          </AppIconsWrapper>
        </AppFooter>
      </HomemakaseContainer>
    </>
  );
};

export default HomeMakase;
