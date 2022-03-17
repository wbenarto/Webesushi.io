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
    ModalAddSteps,
    ModalAddStepButton
} from './ModalElements'
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  uploadImage,
} from "../../redux/actions/userActions";
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
    FaRegCaretSquareDown,
    FaRegCaretSquareUp
  } from "react-icons/fa";
  import {CSSTransition} from 'react-transition-group'


const ingredientsList = [
  'hamachi',
  'uni',
  'tuna',
  'ikura',
  'masago',
  'oo toro',
  'chu toro',
  'negi toro',
  'katsuo',
  'kanpachi',
  'salmon',
  'shrimp tempura',
  'cocktail shrimp',
  'unagi',
  'imitation crab',
  'squid',
  'cucumber',
  'daikon',
  'avocado',
  'jalapeno',
  'lemon',
  'inari',
  'tofu',
  'sushi rice',
  'sriracha',
  'unagi sauce',
  'mayo',
  'wasabi',
  'nori',
  'mirin',
  'sesame seeds',
  'sesame oil'
]

const categoryList = [
  'raw',
  'cooked',
  'vegetarian'
]

const sustainabilityScoreList = [
  'good',
  'bad'
]

const difficultyScoreList = [
  '1','2','3','4','5','6','7','8','9','10'
]


const NavItem = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <li onClick={() => setOpen(!open)}>
      {open ?  ( 
      <>
      <FaRegCaretSquareUp style={{fontSize:'2rem'}} /> 
      {props.children}
      </>
      ) : <FaRegCaretSquareDown style={{fontSize:'2rem'}}/> }     
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
    <ModalDropdown style={{zIndex:'4', height: '200px', overflow: 'scroll'}}>
      {ingredientsList.map((e,i)=> (
        <DropdownItem key={i}>{e}</DropdownItem>
      ))}
    </ModalDropdown>
  )
}


const ModalAddProduct = ({ open, handleClose}) => {
  const [recipeName, setRecipeName] = useState('')
  const [description, setDescription] = useState('')
  const [recipeImage, setRecipeImage] = useState('')
  const [ingredients, setIngredients] = useState([])
  const [category, setCategory] = useState('')
  const [sustainability, setSustainability] = useState('')
  const [difficulty, setDifficulty] = useState('')
  const [steps, setSteps] = useState([{step: '', imageURL: ''}])

  console.log(steps)
  console.log(recipeImage)
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Recipe Name : ' + recipeName);
    alert('Description : ' + description);
    alert('ingredients : ' + ingredients);
  }

  const handleIngredients = (newIngredient) => {
    
    let parsedNewIngredient = newIngredient.toLowerCase();
    console.log('handle ingredients clicked : ' + parsedNewIngredient)
    if (ingredients.indexOf(parsedNewIngredient) < 0) {
      setIngredients([...ingredients, parsedNewIngredient]);
    }
    console.log(ingredients);
  }

  const handleCategory = (newCategory) => {
    setCategory(newCategory)
  }

  const handleSustainability = (newSustainability) => {
    setSustainability(newSustainability)
  }

  const handleDifficulty = (newDifficulty) => {
    setDifficulty(newDifficulty)
  }


  const updateFieldChange = index => e => {
    console.log('index : '+ index)
    console.log('values : ' + e.target.name)
    let newArr = [...steps]
    newArr[index].step = e.target.value
    setSteps(newArr)
  }

  const handleAddStep = () => {
    setSteps([...steps, {step: '' , imageURL: '' }])
  }

  const handleRemoveStep = (i) => {
    const step = [...steps];
    step.splice(i, 1);
    setSteps(step);
  }

  const handleRecipeImage = () => {
    const fileInput = document.getElementById('imageInput');
    fileInput.click();
  }

  const handleRecipeImageUpload = (event) => {
    const image=event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState == 2) {
        setRecipeImage(reader.result)
      }
    }

    reader.readAsDataURL(image)

    // setRecipeImage(image)
   
    // const formData = new FormData();

    // formData.append('image', image, image.name);
    // props.uploadImage(formData)
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
            <ModalImageBox
              onClick={handleRecipeImage}
            >
              {!recipeImage ? (<h1>Product Image Upload</h1>) : 
                <img src={recipeImage} style={{width: '100%', height: '100%', objectFit: 'contain'}} />
              }
              
              <input 
                type='file'
                id='imageInput'
                hidden='hidden'
                onChange={handleRecipeImageUpload}
              />  
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
          {steps.map((step, i) => (
            <ModalAddImageSection key={i}>
            <ModalImageBox>
              <h1>Step Image Upload</h1>  
            </ModalImageBox>
            <ModalRecipeDescription>
              <textarea type="text" 
              value={step.step} 
              onChange={updateFieldChange(i)}  
              placeholder='Add Step Description...'/>
              <ModalAddStepButton onClick={()=>handleRemoveStep(i)}>Remove Step</ModalAddStepButton>
            </ModalRecipeDescription>
    
          </ModalAddImageSection>
           
          ))}
          <ModalAddStepButton onClick={handleAddStep}>Add Steps +</ModalAddStepButton>
          </ModalAddSteps>
          </form>       

        
      </ModalContainer>
    
    </ModalMUI>
    
  );
}

export default ModalAddProduct;


// const mapActionsToProps = { uploadImage };

// const mapStateToProps = (state) => ({
//   uploadImage: PropTypes.func.isRequired,
// });

// export default connect(mapStateToProps, mapActionsToProps)(ModalAddProduct);