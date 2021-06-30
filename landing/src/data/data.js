import img from "../images/webe.png";
import omakase from "../images/omakase.jpg";
import katsuobrush2 from "../images/katsuobrush.jpg";
import recipe from "../images/recipe.jpg";
import market from "../images/market.jpg";
import webe from "../images/webechef.jpg";
import dragonball from "../images/dragonball.jpg";
import tunatorch from "../images/tunatorch.jpg";
import katsuonigiri from "../images/katsuocombo.jpg";
import cucumberbite from "../images/cucumberbite.jpg";
import salmontoro from "../images/goldensalmonnigiri.jpg";
import kanpachi from "../images/hamachinigiri.jpg";
import ika from "../images/ikanigiri.jpg";
import chutoro from "../images/maguronigiri.jpg";
import salmonkewpie from "../images/salmonnigiri.jpg";
import nigiriPrep from "../images/nigiriprep.jpg";

export const sushi = [
  {
    id: 1,
    name: "Chu Toro Nigiri",
    images: chutoro,
    ingredients: ["sushi rice", "tuna"],
    desc: "Medium fatty tuna cut nigiri, glazed with homemade nikiri sauce, topped with green onions. ",
    type: "Raw",
    category: "Nigiri",
  },
  {
    id: 2,
    name: "Torched Chu Toro Nigiri",
    images: tunatorch,
    ingredients: ["sushi rice", "tuna"],
    desc: "Medium fatty tuna cut, torched and glazed over homemade nikiri sauce.",
    type: "raw",
    category: "Nigiri",
  },
  {
    id: 3,
    name: "Golden Salmon Toro Torched Nigiri",
    images: salmontoro,
    ingredients: [
      "sushi rice",
      "salmon",
      "ikura",
      "green onions",
      "gold flakes",
    ],
    desc: "Salmon belly cut torched and glazed over nikiri sauce, topped with salmon roe, green onions, and 24K gold flakes.",
    type: "Raw",
    category: "Nigiri",
  },
  {
    id: 4,
    name: "Kanpachi Nigiri",
    images: kanpachi,
    ingredients: ["sushi rice", "kanpachi", "shiso leaf"],
    desc: "Amberjack nigiri with shisho leaf",
    type: "Raw",
    category: "Nigiri",
  },
  {
    id: 5,
    name: "Ika Nigiri",
    images: ika,
    ingredients: ["sushi rice", "ika", "nikiri sauce", "lemon zest"],
    desc: "Squid nigiri served with homemade nikiri sauce. Topped with lemon zest.",
    type: "Raw",
    category: "Nigiri",
  },

  {
    id: 6,
    name: "Salmon Toro Nigiri",
    images: salmonkewpie,
    ingredients: ["sushi rice", "salmon", "kewpie"],
    desc: "Salmon belly nigiri topped with kewpie mayo.",
    type: "Raw",
    category: "Nigiri",
  },

  {
    id: 7,
    name: "Katsuo Nigiri Combo",
    images: katsuonigiri,
    ingredients: ["sushi rice", "katsuo", "ikura"],
    desc: "Katsuo with nigiri topped with jalapeno and ikura.",
    type: "Raw",
    category: "Nigiri",
  },
  {
    id: 8,
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
    desc: "Spicy Negitoro Temari sushi, topped with avocado, salmon roe, and 24K gold flakes.",
    type: "Raw",
    category: "Chef Special",
  },
  {
    id: 9,
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
    desc: "No carbs option for Ketonian. Salmon, Tuna, Hamachi, and Avocado wrapped inside of thin cucumber layer.",
    type: "Raw",
    category: "Chef Special",
  },
];

export const homeObjOne = {
  id: "home-makase",
  page: "/homemakase",
  lightBg: true,
  lightText: true,
  lightTextDesc: true,
  topLine: "Home-Makase",
  headline: "Guide to premium homemade sushi making",
  description: "Get access to our step by step recipes.",
  buttonLabel: "Get Rollin",
  imgStart: false,
  img: katsuobrush2,
  alt: "sushi",
  dark: false,
  primary: false,
  darkText: false,
  short: true,
};

export const homeObjTwo = {
  id: "sustainability",
  page: "/sustainability",
  lightBg: true,
  lightText: true,
  lightTextDesc: true,
  topLine: "Sustainability",
  headline: "Help Protect Our Ocean's Habitat.",
  description:
    "Learn more about sustainable seafood for sushi and where majority of fish we consume are being sourced.",
  buttonLabel: "For Our Kids",
  imgStart: true,
  img: nigiriPrep,
  alt: "sushi",
  dark: false,
  primary: false,
  darkText: false,
  short: true,
};

export const homeObjThree = {
  id: "about",
  page: "/about",
  lightBg: true,
  lightText: true,
  lightTextDesc: false,
  topLine: "About Me",
  headline: "Sushi chef from South Philadelphia",
  description:
    "I landed my first job as a part time sushi chef at Genji Sushi Callowhill in Philadelphia, PA. My love for sushi and affinity with the Japanese culture while working for a company that was strong in both senses, created a tool for me to learn and provide a very rewarding experience. During that time, I’ve discovered what we consume could be very detrimental to the livestock of our Ocean’s habitat. There are many illegal fishing practices that are still ending up on our plates. As a result, we all can do better. I hope to bring awareness to the sustainability issue and hopefully future generations will still be able to enjoy the Ootoro and Unagi that we all love today. Please use the site to learn new recipes and find out if the protein your fishmonger sells comes from a sustainable source!",
  buttonLabel: "See More",
  imgStart: false,
  img: webe,
  alt: "sushi",
  dark: false,
  primary: false,
  darkText: false,
  short: false,
};

export const homeObjFour = {
  id: "gallery",
  page: "/gallery",
  lightBg: true,
  lightText: true,
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
  darkText: false,
};