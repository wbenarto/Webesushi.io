import styled from "styled-components";

export const Container = styled.div`
  color: #fff;
  display: flex;
  min-height: 692px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;

  /* background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};
  @media screen and (max-width: 768px) {
    padding: 100px 0;
  } */
`;

export const RecipeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  background-color: purple;
  z-index: 1;
  height: 100vh;
  width: 100%;

  margin-right: auto;
  margin-left: auto;

  justify-content: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: 100vh;
  }

  /* 
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? '"col2 col1"' : '"col1 col2"'};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
    imgStart ? '"col1" "col2"' : '"col1 col1" "col2 col2"'};
  } */
`;

export const RecipeRow = styled.div`
  display: flex;

  width: 100%;
`;

export const RecipeCol1 = styled.div`
  padding: 0 15px;
  grid-area: col1;
  background-color: gray;
  width: 600px;
  height: 100%;
`;

export const RecipeCol2 = styled.div`
  padding: 0 15px;
  grid-area: col2;
  background-color: #010106;
  width: 100%;
  height: 100%;
`;
