import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "../ButtonElement";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  Column2,
  ImgWrap,
  Img,
  Icon,
} from "./SustainabilityElements";

const Sustainability = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2,
}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  // const fetchData = () => {
  //   axios
  //     .get(
  //       "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
  //     )
  //     .then((res) => {
  //       console.log(res);
  //       setData(res);
  //     });
  // };
  const fetchData = () => {
    axios.get("https://www.fishwatch.gov/api/").then((res) => {
      console.log(res);
      setData(res);
    });
  };

  // const fishImage = data.data[0].Quote;
  // const fishImg = data.data[0]["Image Gallery"];
  // console.log(fishImg);
  // console.log(fishImage);
  // const bitcoin = data.data.bitcoin.usd;
  // console.log(bitcoin);
  return (
    <>
      <Icon to="/">WebeSushi</Icon>
      <InfoContainer lightBg={lightBg}>
        <Heading lightText="true">Sustainabilty page</Heading>
        <Subtitle> Helloooo </Subtitle>
        <h1>Hello</h1>
        <Icon to="/">WebeSushi </Icon>

        {/* {fishImg.map((e, i) => {
          return (
            <div>
              <img
                key={i}
                src={e.src}
                styles={{ height: "100px", width: "100px" }}
              />
            </div>
          );
        })} */}
      </InfoContainer>
    </>
  );
};

export default Sustainability;
