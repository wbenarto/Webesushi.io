import img from "../../images/webe.png";
import omakase from "../../images/omakase.jpg";
import recipe from "../../images/recipe.jpg";
import market from "../../images/market.jpg";

export const homeObjOne = {
  id: "home-makase",
  lightBg: true,
  lightText: false,
  lightTextDesc: true,
  topLine: "Home-Makase",
  headline: "Premium Source of Homemade Sushi Making",
  description:
    "Get access to our exclusive step by step recipes from chef Webe.",
  buttonLabel: "Get Started",
  imgStart: true,
  img: recipe,
  alt: "sushi",
  dark: true,
  primary: true,
  darkText: true,
};

export const homeObjTwo = {
  id: "sustainability",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Sustainability",
  headline:
    "Let's persevere our Ocean and its habitat for the future generation.",
  description:
    "Learn more about sustainably consuming sushi and where are most fishes sourced from.",
  buttonLabel: "View Recipes",
  imgStart: true,
  img: market,
  alt: "sushi",
  dark: false,
  primary: true,
  darkText: false,
};

export const homeObjThree = {
  id: "gallery",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Gallery",
  headline: "See Images for Webe Sushi products.",
  description: "See my sushi creations throughout the years ... ",
  buttonLabel: "Get Started",
  imgStart: true,
  img: omakase,
  alt: "sushi",
  dark: true,
  primary: true,
  darkText: true,
};
