import React, { useState } from "react";
import Sustainability from "../components/Sustainability";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const SustainabilityPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
    console.log("pressed = " + isOpen);
  };
  return (
    <>
      <Sustainability />
    </>
  );
};

export default SustainabilityPage;
