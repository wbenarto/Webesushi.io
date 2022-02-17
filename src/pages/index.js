import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar/index";
import Services from "../components/Services/index";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
    console.log("pressed = " + isOpen);
  };

  return (
    <>
      <Navbar toggle={toggle} />
      <HeroSection />
      <Services />
    </>
  );
};

export default Home;
