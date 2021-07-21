import React from "react";
import Footer from "../Footer";
import {
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
  return (
    <>
      <ServicesContainer>
        <ServicesH1>Our Mission</ServicesH1>

        <ServicesP>
          Promoting At-Home Omakase experience and providing information about
          sustainable fishing.
        </ServicesP>

        <Footer />
      </ServicesContainer>
    </>
  );
};

export default Services;
