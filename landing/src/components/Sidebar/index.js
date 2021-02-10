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
    <div>
      <SidebarContainer onClick={props.toggle} isOpen={props.isOpen}>
        <Icon>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="about">About</SidebarLink>
            <SidebarLink to="recipes">Recipes</SidebarLink>
            <SidebarLink to="gallery">Gallery</SidebarLink>
          </SidebarMenu>
          <SideBtnWrap>
            <SidebarRoute to="/nextpage">New Page</SidebarRoute>
          </SideBtnWrap>
        </SidebarWrapper>
      </SidebarContainer>
    </div>
  );
};

export default Sidebar;
