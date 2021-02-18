import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarWrapper,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap,
} from "./SidebarElements";

const Sidebar = (props) => {
  return (
    <>
      <SidebarContainer onClick={props.toggle} isOpen={props.isOpen}>
        <Icon>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink onClick={props.toggle} to="home-makase">
              Home-Makase
            </SidebarLink>
            <SidebarLink onClick={props.toggle} to="sustainability">
              Sustainability
            </SidebarLink>
            <SidebarLink onClick={props.toggle} to="about">
              About
            </SidebarLink>
            <SidebarLink onClick={props.toggle} to="gallery">
              Gallery
            </SidebarLink>
          </SidebarMenu>
          <SideBtnWrap>
            <SidebarRoute to="/nextpage">New Page</SidebarRoute>
          </SideBtnWrap>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
