import React from "react";
import Icon1 from "../../images/market.jpg";
import Icon2 from "../../images/omakase.jpg";
import Icon3 from "../../images/recipe.jpg";
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
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Increase Awareness</ServicesH2>
          <ServicesP>
            Educating myself and others to become better as a consumer.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Providing Solutions</ServicesH2>
          <ServicesP>Through Kaizen Mindset</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Food Safety</ServicesH2>
          <ServicesP>
            Helping you achieve industry-level food safety standards.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
