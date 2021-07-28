import styled from "styled-components";

export const RecipeDisplay = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 50% 50%;
  @media screen and (max-width: 475px) {
  }
`;

export const RecipeFilterButton = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;

  background-color: white;
  height: 50px;
  z-index: 2;
  font-size: 0.5rem;
`;

export const RecipeFilter = styled.div`
  display: ${({ open }) => (open == false ? "none" : "flex")};
  position: relative;
  left: 0;
  top: 0;
  background-color: pink;
  height: 150px;
  padding: 10px;

  transition: top 0.3s, left 0.3s;
  animation: animRipple 1s;
  @keyframes animRipple {
    from {
      transform: scale(0);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
  @media screen and (max-width: 968px) {
    height: 60px;
    font-size: 0.5rem;
  }
`;

export const RecipeCard = styled.div`
  height: 420px;
  position: relative;
  background-color: rgba(201, 209, 167, 0.3);
  align-items: center;
  margin: 0px 3px 20px 3px;
  padding: 0px 15px;
  border-radius: 20px;

  :hover {
  }
  @media screen and (max-width: 475px) {
    height: 180px;
    padding: 5px;
  }
`;

export const RecipeCardName = styled.h3`
  height: 50px;
  font-size: 1.5rem;
  padding: 5px;
  text-align: left;
  justify-content: flex-end;
  margin-top: 5px;
  margin-bottom: 5px;
  transition: 0.3s;
  border-radius: 10px;
  :hover {
    cursor: pointer;
    background-color: rgba(10, 10, 10, 0.1);

    transition: 0.3s;
  }

  @media screen and (max-width: 968px) {
    font-size: 1.2rem;
    margin-top: 0;
    margin-bottom: 0;
    height: 40px;
  }

  @media screen and (max-width: 475px) {
    font-size: 0.8rem;
    margin-top: 0;
    margin-bottom: 0;
    height: 40px;
  }
`;

export const RecipeCardImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;

  :hover {
    cursor: pointer;
    background-color: rgba(10, 10, 10, 0.1);

    color: #fff;
    transition: 0.3s;

    -webkit-transform: scale(2);
    transform: scale(1.01);
  }
  @media screen and (max-width: 475px) {
    height: 100px;
  }
`;

export const RecipeCategory = styled.div`
  display: flex;
  position: absolute;
  top: 40px;
  right: 25px;
  width: 100px;
  height: 50px;
  background-color: ${({ e }) =>
    e == "raw" ? "#e83c59" : e == "cooked" ? "#fbfc9d" : "#88e390"};
  font-size: 1.3rem;
  z-index: 4;
  color: ${({ e }) => (e == "raw" ? "#fff" : "black")};
  justify-content: center;
  align-items: center;
  border-radius: 20px;

  @media screen and (max-width: 475px) {
    font-size: 0.7rem;
    right: 15px;
    height: 20px;
    width: 60px;
    border-radius: 8px;
  }
`;

export const CardIcons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  justify-content: space-around;
`;

export const CardButton = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.7rem;
  width: 100%;
  color: black;
  border-radius: 20px;

  > a {
    color: black;
  }

  :hover {
    cursor: pointer;
    background-color: rgba(10, 10, 10, 0.1);
    transition: 0.3s;
    color: #fff;

    > a {
      color: #fff;
      transition: 0.3s;
    }
  }

  :focus {
    background-color: rgba(0, 0, 0, 0.4);
  }

  @media screen and (max-width: 475px) {
    font-size: 1rem;
    height: 30px;
    width: 30px;
  }
`;

export const ModalContainer = styled.div`
  margin: auto;
  background-color: #dbd6a9;
  max-width: 700px;
  width: 98%;
  height: 100%;
  padding: 20px 10px 10px 15px;
  font-family: Raleway;
  overflow-y: scroll;
  transition: 3s;
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
  margin: 10px auto;
  font-size: 1.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ e }) => (e == "raw" ? "#fff" : "black")};

  background-color: ${({ e }) =>
    e == "raw" ? "#e83c59" : e == "cooked" ? "#fbfc9d" : "#88e390"};
`;

export const Modalh1 = styled.h1`
  font-size: 1rem;
  text-align: center;
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
