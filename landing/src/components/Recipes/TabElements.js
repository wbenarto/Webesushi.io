import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100vw;
  height: 100%;

  display: flex;
  background-color: blue;
  flex-direction: column;
  scroll-snap-align: end;
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
