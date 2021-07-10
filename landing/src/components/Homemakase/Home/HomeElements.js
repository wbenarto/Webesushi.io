import styled from "styled-components";

export const Steps = styled.h3`
  border-radius: 50px;
  height: 30px;
  width: 30px;
  border: 2px solid #757575;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

export const HomeInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  border-bottom: double 2px #757575;
`;
export const SushiCategory = styled.div`
  margin-top: 25px;
  width: 100%;
  height: 100px;
  justify-self: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const SushiCategoryButton = styled.div`
  flex-basis: 25%;
  height: 2rem;
  font-size: 1.2rem;
  background-color: transparent;
  color: black;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 475px) {
    font-size: 0.9rem;
  }
`;

export const SushiCategoryDesc = styled.div`
  width: 90%;

  position: relative;
  top: 0;
  color: ${({ cat }) =>
    cat == "raw"
      ? "white"
      : cat == "cooked"
      ? "black"
      : cat == "vegetarian"
      ? "black"
      : "white"};

  background-color: ${({ cat }) =>
    cat == "raw"
      ? "#db405f"
      : cat == "cooked"
      ? "#eded4a"
      : cat == "vegetarian"
      ? "#8df27e"
      : "#db405f"};
  border-radius: 5px;

  > p {
    margin-bottom: 10px;
    padding: 10px;
  }

  @media screen and (max-width: 475px) {
    margin-bottom: 0;
  }
`;
