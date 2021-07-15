import styled from "styled-components";

export const RecipeDisplay = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 50% 50%;
  @media screen and (max-width: 475px) {
  }
`;

export const RecipeCard = styled.div`
  height: 420px;
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
  height: 300px;
  object-fit: cover;
  @media screen and (max-width: 475px) {
    height: 100px;
  }
`;

export const CardIcons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
  margin: auto;
  background-color: #dbd6a9;
  max-width: 700px;
  width: 99vw;
  height: 100%;
  padding: 20px 10px 10px 15px;
  font-family: Raleway;
  overflow-y: scroll;
`;

export const ModalTitle = styled.div`
  font-size: 1.8rem;
  text-align: center;
`;

export const ModalImage = styled.img`
  width: 100%;

  max-height: 60%;
  object-fit: cover;
  margin: 20px 0px;

  @media screen and (max-width: 475px) {
    max-height: 300px;
  }
`;

export const ModalDesc = styled.div`
  font-size: 1.2rem;
  margin: 20px 0px;
  text-align: center;
`;

export const ModalCategory = styled.div`
  width: 100px;
  height: 50px;
  border-radius: 15px;
  margin: 10px auto 40px;
  font-size: 1.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ e }) =>
    e == "raw" ? "#edafbe" : e == "cooked" ? "#dcde64" : "#50b827"};
`;

export const Modalh1 = styled.h1`
  font-size: 1rem;
`;
export const ModalPoints = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  margin: 10px auto;
  font-size: 1.5rem;
`;

export const ModalBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 85%;
`;
