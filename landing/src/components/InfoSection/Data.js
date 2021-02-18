import img from "../../images/webe.png";
import omakase from "../../images/omakase.jpg";
import recipe from "../../images/recipe.jpg";
import market from "../../images/market.jpg";
import webe from "../../images/webechef.jpg";
import dragonball from "../../images/dragonball.jpg";
import tunatorch from "../../images/tunatorch.jpg";
import salmontorch from "../../images/goldensalmonnigiri.jpg";
import katsuonigiri from "../../images/katsuocombo.jpg";
export const sushi = [
  {
    name: "Dragon Ball Sushi",
    images: dragonball,
    ingredients: ["sushi rice", "avocado"],
    desc: "This is so hard to make omagahhh",
  },
  {
    name: "Chu Toro Torched Nigiri",
    images: tunatorch,
    ingredients: ["sushi rice", "tuna"],
    desc: "This TUNA is so hard to make omagahhh",
  },
  {
    name: "Salmon Torched Nigiri",
    images: salmontorch,
    ingredients: ["sushi rice", "avocado"],
    desc: "This is so hard to make omagahhh",
  },
  {
    name: "Katsuo Nigiri Combo",
    images: katsuonigiri,
    ingredients: ["sushi rice", "avocado"],
    desc: "Katsuo with some fish roe yum",
  },
];

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
  id: "about",
  page: "/about",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "About Me",
  headline: "Sushi Chef from Philadelphia",
  description:
    "Kaizen mindset ~ Small improvement each and every day. </br> \br Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  buttonLabel: "See More",
  imgStart: false,
  img: webe,
  alt: "sushi",
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObjFour = {
  id: "gallery",
  page: "/gallery",
  lightBg: true,
  lightText: false,
  lightTextDesc: true,
  topLine: "Gallery",
  headline: "",
  description: "Get access to our step by step recipes from Webe-san.",
  buttonLabel: "Get Rollin",
  imgStart: false,
  img: recipe,
  alt: "sushi",
  dark: false,
  primary: false,
  darkText: true,
};
