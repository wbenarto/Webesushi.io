import img from "../../images/webe.png";
import omakase from "../../images/omakase.jpg";
import recipe from "../../images/recipe.jpg";
import market from "../../images/market.jpg";
import webe from "../../images/webechef.jpg";
import dragonball from "../../images/dragonball.jpg";
import tunatorch from "../../images/tunatorch.jpg";
import salmontorch from "../../images/goldensalmonnigiri.jpg";
import katsuonigiri from "../../images/katsuocombo.jpg";
import cucumberbite from "../../images/cucumberbite.jpg";
import salmontoro from "../../images/goldensalmonnigiri.jpg";
import kanpachi from "../../images/hamachinigiri.jpg";
import ika from "../../images/ikanigiri.jpg";
import chutoro from "../../images/maguronigiri.jpg";
import salmonkewpie from "../../images/salmonnigiri.jpg";

export const sushi = [
  {
    name: "Chu Toro Nigiri",
    images: chutoro,
    ingredients: ["sushi rice", "tuna"],
    desc:
      "Medium fatty tuna cut nigiri, glazed with homemade nikiri sauce, topped with green onions. ",
    type: "Raw",
    category: "Nigiri",
  },
  {
    name: "Torched Chu Toro Nigiri",
    images: tunatorch,
    ingredients: ["sushi rice", "tuna"],
    desc:
      "Medium fatty tuna cut, torched and glazed over homemade nikiri sauce.",
    type: "raw",
    category: "Nigiri",
  },
  {
    name: "Golden Salmon Toro Torched Nigiri",
    images: salmontoro,
    ingredients: [
      "sushi rice",
      "salmon",
      "ikura",
      "green onions",
      "gold flakes",
    ],
    desc:
      "Salmon belly cut torched and glazed over nikiri sauce, topped with salmon roe, green onions, and 24K gold flakes.",
    type: "Raw",
    category: "Nigiri",
  },
  {
    name: "Kanpachi Nigiri",
    images: kanpachi,
    ingredients: ["sushi rice", "kanpachi", "shiso leaf"],
    desc: "Amberjack nigiri with shisho leaf",
    type: "Raw",
    category: "Nigiri",
  },
  {
    name: "Ika Nigiri",
    images: ika,
    ingredients: ["sushi rice", "ika", "nikiri sauce", "lemon zest"],
    desc:
      "Squid nigiri served with homemade nikiri sauce. Topped with lemon zest.",
    type: "Raw",
    category: "Nigiri",
  },

  {
    name: "Salmon Toro Nigiri",
    images: salmonkewpie,
    ingredients: ["sushi rice", "salmon", "kewpie"],
    desc: "Salmon belly nigiri topped with kewpie mayo.",
    type: "Raw",
    category: "Nigiri",
  },

  {
    name: "Katsuo Nigiri Combo",
    images: katsuonigiri,
    ingredients: ["sushi rice", "katsuo", "ikura"],
    desc: "Katsuo with nigiri topped with jalapeno and ikura.",
    type: "Raw",
    category: "Nigiri",
  },
  {
    name: "Golden Dragon Crew Capsule",
    images: dragonball,
    ingredients: [
      "sushi rice",
      "avocado",
      "tuna",
      "spicy mayo",
      "ikura",
      "gold flakes",
    ],
    desc:
      "Spicy Negitoro Temari sushi, topped with avocado, salmon roe, and 24K gold flakes.",
    type: "Raw",
    category: "Chef Special",
  },
  {
    name: "Keto Cucumber Sushi Roll",
    images: cucumberbite,
    ingredients: [
      "sushi rice",
      "avocado",
      "cucumber",
      "salmon",
      "hamachi",
      "tuna",
    ],
    desc:
      "No carbs option for Ketonian. Salmon, Tuna, Hamachi, and Avocado wrapped inside of thin cucumber layer.",
    type: "Raw",
    category: "Chef Special",
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
  imgStart: true,
  img: recipe,
  alt: "sushi",
  dark: false,
  primary: false,
  darkText: true,
};
