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
  /* background-color: pink; */
  height: 150px;
  padding: 10px;

  transform: scaleY(0.01) scaleX(0);
  animation: unfoldIn 1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
  .modal-background {
    .modal {
      transform: scale(0);
      animation: zoomIn 0.5s 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
    }
  }
  &.out {
    transform: scale(1);
    animation: unfoldOut 1s 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
    .modal-background {
      .modal {
        animation: zoomOut 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
      }
    }
  }
  @keyframes unfoldIn {
    0% {
      transform: scaleY(0.005) scaleX(0);
    }
    50% {
      transform: scaleY(0.005) scaleX(1);
    }
    100% {
      transform: scaleY(1) scaleX(1);
    }
  }

  @keyframes unfoldOut {
    0% {
      transform: scaleY(1) scaleX(1);
    }
    50% {
      transform: scaleY(0.005) scaleX(1);
    }
    100% {
      transform: scaleY(0.005) scaleX(0);
    }
  }

  @keyframes slidein {
    from {
      margin-top: -10%;
    }

    to {
      margin-top: 0%;
    }
  }

  @keyframes slideout {
    from {
      margin-top: 0%;
    }
    to {
      margin-top: -10%;
    }
  }

  @media screen and (max-width: 968px) {
    height: 60px;
    font-size: 0.5rem;
  }
`;

export const ContainerCol = styled.div`
  width: 100px;
  /* background-color: purple; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const FilterButton = styled.button`
  width: 100px;
  height: 50px;
  text-decoration: none;
  font-family: Raleway;
  border: none;
  background-color: transparent;

  :active,
  :hover,
  :focus {
    background-color: pink;
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
