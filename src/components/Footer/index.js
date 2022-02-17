import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaRegEnvelope,
} from "react-icons/fa";

import {
  FooterContainer,
  FooterWrapper,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

const index = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const handleEmailMe = () => {
    window.open("mailto:w.benarto@gmail.com");
  };

  return (
    <FooterContainer>
      <FooterWrapper>
        <SocialMediaWrap>
          <SocialLogo to="/" onClick={toggleHome}>
            WebeSushi
          </SocialLogo>

          <WebsiteRights>
            WebeSushi © {new Date().getFullYear()} All Rights reserved.
          </WebsiteRights>
          <SocialIcons>
            <SocialIconLink
              href="https://www.instagram.com/webeclinkz/"
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink
              href="https://github.com/wbenarto"
              target="_blank"
              aria-label="Github"
            >
              <FaGithub />
            </SocialIconLink>
            <SocialIconLink
              href="https://www.linkedin.com/in/william-benarto/"
              target="_blank"
              aria-label="Linked In"
            >
              <FaLinkedin />
            </SocialIconLink>
            <SocialIconLink onClick={handleEmailMe}>
              <FaRegEnvelope></FaRegEnvelope>
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default index;
