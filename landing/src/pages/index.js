import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import Sidebar from "../components/Sidebar/index";
import Navbar from "../components/Navbar/index";
import InfoSection from "../components/InfoSection/index";
import Services from "../components/Services/index";
import Footer from "../components/Footer/index";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from "../components/InfoSection/Data";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
    console.log("pressed = " + isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <Services />
      <Footer />
    </>
  );
};

export default Home;
