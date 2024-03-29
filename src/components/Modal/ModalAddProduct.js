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
    ModalAddStepButton,
    ModalDropdownIcon
} from './ModalElements'
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  uploadImage,
} from "../../redux/actions/userActions";
import {
  createSushi
} from '../../redux/actions/dataActions';
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
      <ModalDropdownIcon>
        <FaRegCaretSquareUp style={{fontSize:'2rem'}} /> 
      </ModalDropdownIcon>
     
      {props.children}
      </>
      ) : 
      (
        <div style={{display:'flex' , justifyContent:'center', alignItems:'center'}}>
          <ModalDropdownIcon>
            <FaRegCaretSquareDown style={{fontSize:'2rem'}}/> 
          </ModalDropdownIcon>
          <h3 style={{paddingLeft: '30px'}}>{props.result}</h3>
        </div>

      )
      }     
    </li>
  )
}

const DropdownMenu = ({handleDropdown, dropdownList}) => {
  const DropdownItem = (props) => {
    return (
      <ModalDropdownItem className='menu-item' onClick={() => handleDropdown(`${props.children}`)}>{props.children}</ModalDropdownItem>
    )
  }

  return (
    <ModalDropdown style={{zIndex:'4', height: '200px', overflow: 'scroll'}}>
      {dropdownList.map((e,i)=> (
        <DropdownItem key={i}>{e}</DropdownItem>
      ))}
    </ModalDropdown>
  )
}


const ModalAddProduct = (props) => {
  const [recipeName, setRecipeName] = useState('')
  const [description, setDescription] = useState('')
  const [recipeImage, setRecipeImage] = useState('')
  const [ingredients, setIngredients] = useState([])
  const [category, setCategory] = useState('')
  const [sustainability, setSustainability] = useState('')
  const [difficulty, setDifficulty] = useState('')
  const [steps, setSteps] = useState([{step: '', imageURL: ''}])

  console.log(steps)
  const handleSubmit = (event) => {
    //uploadRecipeImage returns URL, update imageURL
    //uploadRecipeStepImage returns URL, upadate steps[i].imageURL
    // compile all new recipe info
    // props.createSushi to POST 
    


    const newRecipe = {
      name: recipeName,
      desc: description,
      imageUrl: recipeImage,
      ingredients: ingredients,
      category: category,
      difficultyScore: difficulty,
      steps: steps,
    }

    
    event.preventDefault();
    console.log('Recipe Name : ' + recipeName)
    console.log('Description : ' + description)
    console.log('ingredients : ' + ingredients)
    console.log('category : ' + category)
    console.log('sustainability : ' + sustainability)
    console.log('difficulty : ' + difficulty)
    console.log('steps : ' + JSON.stringify(steps))

    props.createSushi(newRecipe);
  }

  const handleIngredients = (newIngredient) => {
    
    let parsedNewIngredient = newIngredient.toLowerCase();
    console.log('handle ingredients clicked : ' + parsedNewIngredient)
    if (ingredients.indexOf(parsedNewIngredient) < 0) {
      setIngredients([...ingredients, parsedNewIngredient]);
    }
    console.log(ingredients);
  }

  const removeIngredient = (i) => {
    const ing = [...ingredients]
    ing.splice(i, 1)
    setIngredients(ing)
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

  const handleStepImage = (i) => {
    const fileInput = document.getElementById(`stepImageInput${i}`);
    fileInput.click();
  }

  const handleStepImageUpload = (index) => (e) => {
    console.log(index)
    const image = e.target.files[0];
    console.log(image)
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState == 2) {
        const newArr = [...steps]
        newArr[index].imageURL = reader.result
        setSteps(newArr)
      }
    }
    reader.readAsDataURL(image)
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

    if (image.size > 1000000) {
      alert("File is too big! Please upload image less than 1MB.");
    } else {
      reader.readAsDataURL(image)
    }


    // setRecipeImage(image)
   
    // const formData = new FormData();

    // formData.append('image', image, image.name);
    // props.uploadImage(formData)
  } 

  return (
    <ModalMUI open={props.open} >
  
      <ModalContainer>
          <form>
          <ModalAddProductHeader>
            <h3 onClick={props.handleClose}>Back</h3>
            <h1>Add New Sushi Recipe</h1>
            <h3 onClick={handleSubmit}>Post</h3>
          </ModalAddProductHeader>
          <ModalAddImageSection>
            <ModalImageBox
              onClick={handleRecipeImage}
            >
              {!recipeImage ? (<h1>Product Image Upload</h1>) : 
                <img src={recipeImage} style={{padding: '5px', width: '100%', height: '100%', objectFit: 'contain'}} />
              }
              
              <input 
                type='file'
                id='imageInput'
                hidden='hidden'
                onChange={handleRecipeImageUpload}
                required
              />  
            </ModalImageBox>
            <ModalRecipeDescription>
              <input value={recipeName} onChange={(e)=> setRecipeName(e.target.value)} placeholder='Recipe Name...'/>
              <textarea type="text" 
              value={description} 
              onChange={(e) => setDescription(e.target.value)}  
              placeholder='Add Description...'
              required
              />
            </ModalRecipeDescription>
    
          </ModalAddImageSection>
          <ModalRecipeIngredients>
              <ModalInputField>
                <ModalInputLabel>
                  <h2>Ingredients:</h2>
                </ModalInputLabel>
              
              <NavItem >
                <DropdownMenu dropdownList={ingredientsList} handleDropdown={handleIngredients}></DropdownMenu>
              </NavItem>  
              </ModalInputField>
              {ingredients.length>0 ?   
              <ModalIngredientsList>
              {ingredients?.map((e, i)=> (
                  <p onClick={() => removeIngredient(i)}>{e.toUpperCase()}</p>
                ))}
              </ModalIngredientsList> : <></>}
           
 
          </ModalRecipeIngredients>
          <ModalInputField>
            <ModalInputLabel>
              <h2>Category:</h2>
            </ModalInputLabel>
            <NavItem result={category}>
              <DropdownMenu dropdownList={categoryList} handleDropdown={handleCategory}></DropdownMenu>
            </NavItem>
          </ModalInputField>
          <ModalInputField>
            <ModalInputLabel>
              <h2>Sustainability Score:</h2>
            </ModalInputLabel>
            <NavItem result={sustainability}>
              <DropdownMenu dropdownList={sustainabilityScoreList} handleDropdown={handleSustainability}></DropdownMenu>
            </NavItem>
          </ModalInputField>
          <ModalInputField>
            <ModalInputLabel>
              <h2>Difficulty Score:</h2>
            </ModalInputLabel>
            <NavItem result={difficulty}>
              <DropdownMenu dropdownList={difficultyScoreList} handleDropdown={handleDifficulty}></DropdownMenu>
              
            </NavItem>
          </ModalInputField>
          <ModalAddSteps>
          {steps.map((step, i) => (
            <ModalAddImageSection key={i}>
            <ModalImageBox onClick={()=>handleStepImage(i)}>
              {step.imageURL ? (
                <img src={step.imageURL} style={{padding: '5px', width: '100%', height: '100%', objectFit: 'contain'}} />
              ) : ( <h1>Step Image Upload</h1>  )}
             
              <input 
                type='file'
                id={`stepImageInput${i}`}
                hidden='hidden'
                onChange={handleStepImageUpload(i)}
                required
              />  
            </ModalImageBox>
            <ModalRecipeDescription>
              <textarea type="text" 
              value={step.step} 
              onChange={updateFieldChange(i)}  
              placeholder='Add Step Description...'
              required
              />
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

// export default ModalAddProduct;

ModalAddProduct.propTypes = {
  createSushi: PropTypes.func.isRequired,
}

const mapActionsToProps = { uploadImage, createSushi };

const mapStateToProps = (state) => ({
  uploadImage: PropTypes.func.isRequired,
});

export default connect(mapStateToProps, mapActionsToProps)(ModalAddProduct);