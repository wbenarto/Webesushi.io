import styled from "styled-components";

export const HomeContainer = styled.div`
  position: relative;

  width: 100%;
  height: 100%;

  display: flex;
  /* background-color: lightpink; */
  flex-direction: column;
`;

export const HomeDisplay = styled.div`
  background-color: teal;
  flex-direction: row;
  height: 40vh;
  position: relative;
  display: flex;
  @media screen and (max-width: 475px) {
    width: 100%;
    height: 250px;
  }
`;

export const HomeMedia = styled.div`
  width: 100%;
  height: 150px;
  background-color: yellow;
  color: black;
  display: flex;
  flex-direction: row;
  position: relative;
`;

export const HomeFilter = styled.div`
  width: 100%;
  height: 35vh;
  background-color: purple;
  display: flex;
  position: relative;
`;

export const HomeControls = styled.div`
  width: 100vw;
  height: 200px;
  background-color: #fff;
  display: flex;
`;

export const VideoScroll = styled.video`
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
  z-index: 999;
`;
