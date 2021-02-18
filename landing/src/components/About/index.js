import React from "react";
import {
  Container,
  AboutWrapper,
  AboutRow,
  AboutCol1,
  AboutCol2,
} from "./RecipesElements";

const About = () => {
  return (
    <>
      <Container lightBg={true}>
        <AboutWrapper>
          <AboutCol1>Here1 </AboutCol1>
          <AboutCol2>Heres 2</AboutCol2>
        </AboutWrapper>
      </Container>
    </>
  );
};

export default About;
