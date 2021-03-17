import React from "react";
import { HomeContainer, HomeControls, VideoScroll } from "./HomeElements";
import video from "../../videos/video.mp4";

const Home = () => {
  return (
    <HomeContainer>
      <h1>home</h1>
      <li>
        <ul>Tools</ul>
        <ul>Prep</ul>
        <ul>Veg Prep</ul>
        <ul>Cooked Prep</ul>
        <ul>Raw Prep</ul>
        <ul>Rolling</ul>
        <ul>Plating</ul>
      </li>
    </HomeContainer>
  );
};

export default Home;
