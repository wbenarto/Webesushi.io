import React from 'react'
import {
    AppNav,
    AppNavLogo,
    AppHeading,
  } from "./HomemakaseElements";

import {
    FaChevronLeft,
  } from "react-icons/fa";
  

const HomemakaseNav = () => {
    return (
        <>
        <AppNav>
          <AppNavLogo to="/">
            <FaChevronLeft />
          </AppNavLogo>
          <AppHeading>HOME-MAKASE</AppHeading>
        </AppNav>
        </>
    )
}

export default HomemakaseNav;