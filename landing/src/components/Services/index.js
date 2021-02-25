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
    <ServicesContainer id="services">
      <ServicesH1>Our Mission</ServicesH1>
      <ServicesCard>
        <ServicesP>
          Promoting At-Home Omakase experience and providing information about
          sustainability in sushi.
        </ServicesP>
      </ServicesCard>

      <ServicesWrapper>
        {/* <ServicesCard>
          <ServicesIcon src={Icon1} />
           <ServicesH2>Increase Awareness</ServicesH2>
          <ServicesP>
            We are responsible for the health of our Ocean. Let's spread more
            information about sustainability in Sushi.
          </ServicesP>
        </ServicesCard> */}
        <ServicesCard>
          {/* <ServicesIcon src={Icon2} /> */}
          <ServicesH2></ServicesH2>
        </ServicesCard>
        {/* <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Kaizen Mindset</ServicesH2>
          <ServicesP>Strive to be better each and every days.</ServicesP>
        </ServicesCard> */}
      </ServicesWrapper>
      <Footer />
    </ServicesContainer>
  );
};

export default Services;
