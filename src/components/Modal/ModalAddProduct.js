import './transition.css'
import React, {useState, useRef, useEffect} from "react";
import {ModalBackground1, ModalContainer, ModalTitle,
    ModalImage,
    ModalDesc,
    ModalCategory,
    ModalPoints,
    ModalBox,
    Modalh1,
    ModalIngredients,
    ModalIngredient,
    ModalAddProductHeader,
    ModalAddImageSection,
    ModalImageBox,
    ModalRecipeDescription,
    ModalRecipeIngredients,
    ModalIngredientsList,
    ModalDropdownItem,
    ModalDropdown,
    ModalInputField,
    ModalInputLabel,
    ModalAddSteps
} from './ModalElements'
import {  
    CardIcons,
    CardButton,} from '../Homemakase/Recipe/RecipeElements'
import ModalMUI from "@material-ui/core/Modal";

import { Link } from "react-router-dom";
import { FiFrown, FiSmile } from "react-icons/fi";
import {
    FaRegHeart,
    FaHeart,
    FaRegPlusSquare,
    FaRegCaretSquareDown
  } from "react-icons/fa";
  import {CSSTransition} from 'react-transition-group'


const ingredientsList = [
  'avocado',
  'cucumber',
  'salmon',
  'tuna'

]


const NavItem = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <li onClick={() => setOpen(!open)}>
      {open ?  props.children : <FaRegCaretSquareDown style={{fontSize:'2rem'}}/> }     
    </li>
  )
}

const DropdownMenu = ({handleIngredients}) => {
  const DropdownItem = (props) => {
    return (
      <ModalDropdownItem className='menu-item' onClick={() => handleIngredients(`${props.children}`)}>{props.children}</ModalDropdownItem>
    )
  }

  return (
    <ModalDropdown style={{zIndex:'4'}}>
      {ingredientsList.map((e,i)=> (
        <DropdownItem key={i}>{e}</DropdownItem>
      ))}
    </ModalDropdown>
  )
}


const ModalAddProduct = ({ open, handleClose}) => {
  const [recipeName, setRecipeName] = useState('')
  const [description, setDescription] = useState('')
  const [ingredients, setIngredients] = useState([])

  const handleSubmit = (event) => {
   
    event.preventDefault();
    alert('Recipe Name : ' + recipeName);
    alert('Description : ' + description);
    alert('ingredients : ' + ingredients);
  }

  const handleIngredients = (newIngredient) => {
    
    let parsedNewIngredient = newIngredient.toLowerCase();
    console.log('handle ingredients clicked : ' + parsedNewIngredient)
    setIngredients([...ingredients, parsedNewIngredient]);
    console.log(ingredients);
  }

  return (
    <ModalMUI open={open} >
  
      <ModalContainer>
          <form>
          <ModalAddProductHeader>
            <h3 onClick={handleClose}>Back</h3>
            <h1>Add New Sushi Recipe</h1>
            <h3 onClick={handleSubmit}>Post</h3>
          </ModalAddProductHeader>
          <ModalAddImageSection>
            <ModalImageBox>
              <h1>Product Image Upload</h1>  
            </ModalImageBox>
            <ModalRecipeDescription>
              <input value={recipeName} onChange={(e)=> setRecipeName(e.target.value)} placeholder='Recipe Name...'/>
              <textarea type="text" 
              value={description} 
              onChange={(e) => setDescription(e.target.value)}  
              placeholder='Add Description...'/>
            </ModalRecipeDescription>
    
          </ModalAddImageSection>
          <ModalRecipeIngredients>
              <ModalInputField>
                <ModalInputLabel>
                  <h2>Ingredients:</h2>
                </ModalInputLabel>
              
              <NavItem >
                <DropdownMenu handleIngredients={handleIngredients}></DropdownMenu>
              </NavItem>  
              </ModalInputField>
              {ingredients.length>0 ?   
              <ModalIngredientsList>
              {ingredients?.map((e, i)=> (
                  <p>{e.toUpperCase()}</p>
                ))}
              </ModalIngredientsList> : <></>}
           
 
          </ModalRecipeIngredients>
          <ModalInputField>
            <ModalInputLabel>
              <h2>Category:</h2>
            </ModalInputLabel>
            <NavItem>
              <DropdownMenu></DropdownMenu>
            </NavItem>
          </ModalInputField>
          <ModalInputField>
            <ModalInputLabel>
              <h2>Sustainability Score:</h2>
            </ModalInputLabel>
            <NavItem>
              <DropdownMenu></DropdownMenu>
            </NavItem>
          </ModalInputField>
          <ModalInputField>
            <ModalInputLabel>
              <h2>Difficulty Score:</h2>
            </ModalInputLabel>
            <NavItem>
              <DropdownMenu></DropdownMenu>
            </NavItem>
          </ModalInputField>
          <ModalAddSteps>
          <h1>Add Steps +</h1>
          </ModalAddSteps>

          

          
          </form>       

         
          <h1>When add steps clicked, open new boxes</h1>
          <h2>Add Step Number</h2>
          <h2>Add Step Image</h2>
          <h2>Add Step Description</h2>
          <h1>Submit Button</h1>
        
      </ModalContainer>
    
    </ModalMUI>
    
  );
}

export default ModalAddProduct;