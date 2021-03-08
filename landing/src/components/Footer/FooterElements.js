import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  /* background-color: #101522; */
  flex-shrink: 0;
  height: 5vh;
  background-color: #010606;
  width: 100%;

  @media screen and (max-width: 768px) {
    height: 15vh;
  }
`;

export const FooterWrapper = styled.div`
  padding: 0 24px;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding: 0px;
  }
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
  color: #dbd6a9;
`;

export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;

  font-size: 14px;

  &:hover {
    color: #01bf71;
    transition: 0.3s ease-out;
  }
`;

export const SocialMedia = styled.section`
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 0;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;

  font-weight: bold;
`;

export const WebsiteRights = styled.small`
  color: #fff;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;

  @media screen and (max-width: 768px) {
    width: 100vw;
    display: flex;
    justify-content: space-evenly;
  }
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`;
