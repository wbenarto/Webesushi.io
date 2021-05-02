import buri from "../images/seafood/yellowtail.webp";
import albacore from "../images/seafood/albacore.webp";
import atlanticsalmon from "../images/seafood/albacore.webp";
import bluecrab from "../images/seafood/bluecrab.webp";
import bluefin from "../images/seafood/bluefin-tuna.webp";
import mackerel from "../images/seafood/mackerel.webp";
import octopus from "../images/seafood/octopus.webp";
import uni from "../images/seafood/red-sea-urchin.webp";
import snowcrab from "../images/seafood/snowcrab.webp";
import tigershrimp from "../images/seafood/tiger-shrimp.webp";

const seafoodData = [
  {
    id: 1,
    species: "Amberjack",
    alias:
      "Amberjack, Buri, Hamachi, Hawaiian Kanpachi, Yellowtail, Hiramasa, Kanpachi",
    region: "Worldwide",
    method: "Farmed indoor with recirculating tanks.",
    recommendation: "Best Choice",
    img: buri,
  },
  {
    id: 2,
    species: "Blue Crab",
    alias: "Blue-claw, Hardshell Crab, Kani, Softshell Crab",
    region: "Maryland, US",
    method: "Trotline",
    recommendation: "Best Choice",
    img: bluecrab,
  },
  {
    id: 3,
    species: "Snow Crab",
    alias: "Kani, Queen, Snow, Spider crab, Tanner crab.",
    region: "Alaska, US",
    method: "Pots",
    recommendation: "Best Choice",
    img: snowcrab,
  },
  {
    id: 4,
    species: "Atlantic Spanish Mackerel",
    alias:
      "Bay Mackerel, Saba, Sierra, Spaniard, Spanish Mackerel, Spotted Cybium, Spotted Mackerel, Sawara",
    region: "US",
    method: "Cast nets",
    recommendation: "Best Choice",
    img: mackerel,
  },
  {
    id: 5,
    species: "Giant Pacific Octopus",
    alias: "Tako",
    region: "Alaska, US",
    method: "Pots",
    recommendation: "Best Choice",
    img: octopus,
  },
  {
    id: 6,
    species: "Atlantic Salmon",
    alias: "Sake",
    region: "Norway",
    method: "Marine Net Pen",
    recommendation: "Avoid",
    img: atlanticsalmon,
  },
  {
    id: 7,
    species: "Atlantic Salmon ASC Certified",
    alias: "Sake",
    region: "Norway",
    method: "Marine Net Pen",
    recommendation: "Best Choice",
    img: atlanticsalmon,
  },
  {
    id: 8,
    species: "Purple Sea Urchin",
    alias: "Uni",
    region: "Oregon, US",
    method: "Diving",
    recommendation: "Best Choice",
    img: uni,
  },
  {
    id: 9,
    species: "Shrimp",
    alias: "Ebi, Prawn",
    region: "Worldwide",
    method: "Farmed",
    recommendation: "Best Choice",
    img: tigershrimp,
  },
  {
    id: 10,
    species: "Albacore",
    alias: "White Tuna",
    region: "Worldwide",
    method: "Drifting Longlines",
    recommendation: "Avoid",
    img: albacore,
  },
  {
    id: 11,
    species: "Pacific Bluefin Tuna",
    alias: "Maguro, Toro",
    region: "Eastern Central Pacific Ocean",
    method: "Drift Gillnets",
    recommendation: "Avoid",
    img: bluefin,
  },
];

export default seafoodData;

// All data combined from Seafoodwatch.org, WWF Data online website
