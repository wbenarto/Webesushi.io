import styled from "styled-components";

export const ModalContainer = styled.div`
margin: 20px auto;
background-color: #ffffff;
max-width: 700px;
width: 98%;
height: 95%;
padding: 20px 10px 10px 15px;
font-family: Raleway;
overflow-y: scroll;
transition: 3s;
border-radius: 25px;

`;

export const ModalTitle = styled.div`
font-size: 1.8rem;
text-align: center;
font-weight: 600;
`;

export const ModalImage = styled.img`
width: 100%;
border-radius: 20px;
height: 400px;
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
margin: auto;
width: 85%;
height: 100%;
`;

export const ModalIngredients = styled.div`
    display: flex;
    justify-content: flex-start;
    color:black;
    width: 100%;
    min-height: 80%;
    flex-direction: column;
    border: 1px solid black;
    border-width: 1px 0 1px 0;
    margin-top: 20px;
    padding-top: 20px;

`

export const ModalIngredient = styled.p`
    color: black;
    font-size: 1.5em;
    padding: 2px;
    width: 100%;
`



// Test
export const ModalBackground1 = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #e6d2bc;
  position: absolute;
    z-index: 10;


`

// ModalAddProduct
export const ModalAddProductHeader = styled.div`
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #000000;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* background-color: pink; */

  @media screen and (max-width: 475px) {
    >h1 {
      font-size: 1.2rem;
    }
    >h3 {
      font-size: 1rem;
      &:hover {
        cursor: pointer;
      }
    }
    >h2 {
      font-size: 1rem;
    }
  }
`

export const ModalAddImageSection = styled.div`
  height: 200px;
  width: 100%;
  /* background-color: purple; */
  padding: 20px 0;
  display: flex;


`

export const ModalImageBox = styled.div`
  width : 40%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  /* background-color: blue; */
`

export const ModalInputField = styled.div`
  width: 100%;
  flex-direction: row;
  display: flex;
  height: 60px;
  align-items: center;

`

export const ModalInputLabel = styled.div`
  width: 40%;
  /* background-color: yellow; */
`

export const ModalRecipeDescription = styled.div`
  width: 60%;
  height: 100%;
  /* background-color: yellow; */
  font-family: Raleway;
  
  >input {
    width: 100%;
    background-color: transparent;
    font-family: Raleway;
    font-weight: 500;
    border: none;
    height: 2rem;
    padding: 5px;
  }
  >textarea {
    width: 100%;
    height: 70%;
    background-color: transparent;
    font-family: Raleway;
    padding: 5px;
    
  }
`

export const ModalRecipeIngredients = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: pink; */
  display: flex;
  align-items: center; 
  flex-direction: column;

  >li {
    font-size: 32px;

    &:hover {
      filter: brightness(1.2);
      cursor: pointer;

    }
  }
  >select {
      width: 60%;
      height: 50px;
    }
  
  }
`

export const ModalIngredientsList = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  /* background-color: cyan; */
  height: 100px;
  padding: 5px;
  overflow: scroll; 

  >p{
    height: 40px;
    padding: 10px; 
    border: 1px solid black;
    border-radius: 10px;
    align-items: center;
    display:flex;
    margin: 5px;

  }

`

export const ModalDropdown = styled.div`
  position: absolute;
  width: 300px;
  /* background-color: #242526; */
  border:  1px solid #474a4d;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 1rem;
  overflow: hidden;
  transition: height 500ms ease;
`

export const ModalDropdownItem = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 8px;
  transition: #151616 500ms;
  padding: 0.5rem;
  border-bottom: 1px solid #000000;

  &:hover {
    background-color: #525357;
    cursor: pointer;
  }
`
// Add Steps
export const ModalAddSteps = styled.div`
  width: 100%;
  /* background-color: pink; */
  height: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
`

export const ModalAddStepButton = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content:center;
  /* background-color: yellow; */
  align-items:center;

`