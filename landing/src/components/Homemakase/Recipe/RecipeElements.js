import styled from "styled-components";

export const RecipeDisplay = styled.div`
  @media screen and (max-width: 475px) {
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: 50% 50%;
  }
`;

export const RecipeCard = styled.div`
  height: 520px;
  position: relative;

  align-items: center;
  margin-bottom: 30px;
  padding: 0px 5px;
  @media screen and (max-width: 475px) {
    height: 150px;
  }
`;

export const RecipeCardName = styled.h3`
  height: 40px;
  font-size: 1.5rem;
  padding-bottom: 10px;
  text-align: left;
  justify-content: flex-end;

  @media screen and (max-width: 475px) {
    font-size: 0.8rem;
  }
`;

export const RecipeCardImage = styled.img`
  width: 100%;
  height: 440px;
  object-fit: cover;
  @media screen and (max-width: 475px) {
    height: 100px;
  }
`;

export const CardIcons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 10px;
`;

export const CardButton = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 1.4rem;

  @media screen and (max-width: 475px) {
    font-size: 1rem;
  }
`;

export const ModalContainer = styled.div`
  background-color: white;
  height: 100%;
  padding: 20px;
  font-family: Raleway;
`;

export const ModalTitle = styled.div`
  font-size: 2.4rem;
  text-align: center;
`;

export const ModalImage = styled.img`
  width: 100%;
  margin: 20px 0px;
`;

export const ModalDesc = styled.div`
  font-size: 1.2rem;
  margin: 20px 0px;
`;

export const ModalCategory = styled.div`
  width: 100px;
  height: 60px;
  border-radius: 15px;
  margin: 20px auto 40px;
  font-size: 1.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ e }) =>
    e == "raw" ? "#edafbe" : e == "yellow" ? "#dcde64" : "#50b827"};
`;

export const ModalPoints = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: solid 2px black;
  margin: 20px auto;
`;
