import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import Sidebar from "../components/Sidebar/index";
import Navbar from "../components/Navbar/index";
import InfoSection from "../components/InfoSection/index";
import InfoCarousel from "../components/InfoSection/InfoCarousel";
import Services from "../components/Services/index";
import Footer from "../components/Footer/index";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  homeObjFour,
  sushi,
} from "../components/InfoSection/Data";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
    console.log("pressed = " + isOpen);
  };

  return (
    <div style={{ scrollSnapType: "y" }}>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection style={{ scrollSnapAlign: "center" }} />
      <InfoSection style={{ scrollSnapAlign: "center" }} {...homeObjOne} />
      <InfoSection style={{ scrollSnapAlign: "start" }} {...homeObjTwo} />
      <InfoSection style={{ scrollSnapAlign: "start" }} {...homeObjThree} />
      <InfoCarousel
        style={{ scrollSnapAlign: "start" }}
        {...homeObjFour}
        {...sushi}
      />
      <Services />
    </div>
  );
};

export default Home;
