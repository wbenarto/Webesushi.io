import React, { useState } from "react";
import Shop from "../components/Recipes/Shop";
import Home from "../components/Recipes/Home";
import webewhite from "../images/webe.png";
import {
  Nav,
  NavbarContainer,
  NavLogo,
} from "../components/Navbar/NavbarElements";

const RecipesPage = () => {
  return (
    <div
      style={{
        marginTop: "80px",
        backgroundColor: "transparent",
        alignContent: "center",
      }}
    >
      <Nav scrollNav="home">
        <NavbarContainer>
          <NavLogo to="/">
            <img
              alt="webe-sushi"
              style={{
                width: "100px",
                height: "100px",
                position: "absolute",
                marginRight: "0px",
                display: "flex",
              }}
              src={webewhite}
            ></img>
          </NavLogo>
        </NavbarContainer>
      </Nav>

      <Home />
    </div>
  );
};

export default RecipesPage;
