import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  HomeContainer,
  HomeControls,
  VideoScroll,
  HomeDisplay,
  HomeMedia,
  HomeFilter,
} from "./HomeElements";
import video from "../../videos/video.mp4";
import tools1 from "../../images/tools1.jpg";
import data3 from "../../data2/data3";

import PropTypes from "prop-types";

import { connect } from "react-redux";
import { getSushis } from "../../redux/actions/dataActions";

const Home = (props) => {
  const [sushi, setSushi] = useState("");

  useEffect(() => {
    props.getSushis();
  }, []);

  const { sushis, loading } = props.data;
  console.log(sushis);

  const recentSushisMarkUp = loading ? (
    <p>Loading...</p>
  ) : (
    sushis.map((sushi) => (
      <>
        <h1 key={sushi.sushiId} sushi={sushi}>
          {sushi.name}
        </h1>
        <h1>{sushi.category}</h1>
        {sushi.ingredients.map((e, i) => (
          <p key={i}>{e}</p>
        ))}

        <img
          style={{ width: "200px", height: "200px" }}
          src={sushi.image}
        ></img>
      </>
    ))
  );

  // useEffect(() => {
  //   axios
  //     .get("https://us-central1-webesushi-a3bf0.cloudfunctions.net/api/sushis")
  //     .then((res) => {
  //       setSushi(res);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <HomeContainer>
      <h1>Home</h1>
      <h2>Follow the steps:</h2>
      {recentSushisMarkUp}
      <HomeDisplay>
        <HomeMedia>
          {data3.map((e, i) => (
            <>
              {/* {e.images.map((e) => (
                <img
                  style={{
                    width: "150px",
                    objectFit: "cover",
                  }}
                  src={e}
                ></img>
              ))} */}
              {e.steps.map((e) => (
                <p>{e}</p>
              ))}
            </>
          ))}

          <img></img>
          <p></p>

          <img></img>
          <p></p>
        </HomeMedia>
        {/* <img
          style={{ width: "150px", height: "150px" }}
          src={sushi.data[0].image}
        ></img> */}
        <p>here</p>
      </HomeDisplay>
      <HomeFilter>
        {" "}
        <li>
          <ul>Tools</ul>
          <li>Knife</li>
          <p>How To Sharpen Your Knives</p>
          <ul>Prep</ul>
          <li>Rice</li>
          <ul>Veg Prep</ul>
          <li>Cucumber</li>
          <li>Avocado</li>
          <li>Green Onions</li>
          <li>Jalapeno</li>

          <ul>Cooked Prep</ul>
          <li>Shrimp Tempura</li>
          <li>Cook Shrimp</li>
          <li></li>
          <ul>Raw Prep</ul>
          <li>Salmon</li>
          <li>Tuna</li>
          <ul>Rolling</ul>
          <ul>Plating</ul>
        </li>
      </HomeFilter>
    </HomeContainer>
  );
};

Home.propTypes = {
  getSushis: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({ data: state.data });

export default connect(mapStateToProps, { getSushis })(Home);
