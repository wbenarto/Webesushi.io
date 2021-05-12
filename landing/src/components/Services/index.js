import React from "react";
import Icon1 from "../../images/market.jpg";
import Icon2 from "../../images/omakase.jpg";
import Icon3 from "../../images/recipe.jpg";
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
