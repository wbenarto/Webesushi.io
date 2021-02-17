import img from "../../images/webe.png";
import omakase from "../../images/omakase.jpg";
import recipe from "../../images/recipe.jpg";
import market from "../../images/market.jpg";

export const homeObjOne = {
  id: "home-makase",
  page: "/recipes",
  lightBg: true,
  lightText: false,
  lightTextDesc: true,
  topLine: "Home-Makase",
  headline: "Guide to Premium Homemade Sushi Making",
  description: "Get access to our step by step recipes from Webe-san.",
  buttonLabel: "Get Rollin",
  imgStart: false,
  img: recipe,
  alt: "sushi",
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObjTwo = {
  id: "sustainability",
  page: "/sustainability",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Sustainability",
  headline:
    "Let's help protect our Ocean and its habitat for the future generation.",
  description:
    "Learn more about sustainable seafood for sushi and where are most fishes sourced from.",
  buttonLabel: "For Our Kids",
  imgStart: true,
  img: market,
  alt: "sushi",
  dark: true,
  primary: true,
  darkText: false,
};

export const homeObjThree = {
  id: "gallery",
  page: "/gallery",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Gallery",
  headline: "See Images for Webe Sushi products.",
  description: "See creations by Webe-san throughout the years ... ",
  buttonLabel: "See More",
  imgStart: false,
  img: omakase,
  alt: "sushi",
  dark: false,
  primary: false,
  darkText: true,
};
