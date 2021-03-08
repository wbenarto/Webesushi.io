import React from "react";
import Icon1 from "../../images/market.jpg";
import Icon2 from "../../images/omakase.jpg";
import Icon3 from "../../images/recipe.jpg";
import Footer from "../Footer";
import {
  ServicesContainer,
  ServicesCard,
  ServicesH1,
  ServicesWrapper,
  ServicesH2,
  ServicesP,
  ServicesIcon,
} from "./ServicesElements";

const Services = () => {
  return (
    <>
      <ServicesContainer id="services">
        <ServicesH1>Our Mission</ServicesH1>
        <ServicesCard>
          <ServicesP>
            Promoting At-Home Omakase experience and providing information about
            sustainable fishing.
          </ServicesP>
        </ServicesCard>

        <Footer />
      </ServicesContainer>
    </>
  );
};

export default Services;
