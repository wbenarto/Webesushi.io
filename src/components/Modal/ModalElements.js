import styled from "styled-components";

export const ModalContainer = styled.div`
margin: 20px auto;
background-color: #ffffff;
max-width: 700px;
width: 98%;
height: 100%;
padding: 20px 10px 10px 15px;
font-family: Raleway;
overflow-y: scroll;
transition: 3s;
border-radius: 25px;
animation: transitionIn 1s;

@keyframes transitionIn {
        from {
            opacity: 0;
            margin-top: 1000px;
        }
        to {
            opacity: 1;
            top: 0;
        }
    }
`;

export const ModalTitle = styled.div`
font-size: 1.8rem;
text-align: center;
font-weight: 600;
`;

export const ModalImage = styled.img`
width: 100%;
border-radius: 20px;
min-height: 400px;
max-height: 600px;
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
    justify-content: center;
    color:black;
    width: 100%;
    min-height: 400px;
    flex-direction: column;
    border: 1px solid black;
    border-width: 1px 0 1px 0;
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
export const ModalContainer1 = styled.div`
  width: 50vw;
  height: 40vh;
  border-radius: 12px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  padding: 25px;
`