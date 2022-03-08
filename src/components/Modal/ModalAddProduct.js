import Reac, {useState} from "react";
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
    ModalRecipeIngredients
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
  } from "react-icons/fa";



const ModalAddProduct = ({ open, handleClose}) => {
  const [description, setDescription] = useState('')
  const [ingredients, setIngredients] = useState([])

  const handleSubmit = (event) => {
   
    event.preventDefault();
    alert('Description : ' + description);
    alert('ingredients : ' + ingredients)
  }

  const handleIngredients = (newIngredients) => {
    setIngredients(newIngredients)
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
              <textarea type="text" 
              value={description} 
              onChange={(e) => setDescription(e.target.value)}  
              label='Add Description'/>
              
            </ModalRecipeDescription>
            
    
          </ModalAddImageSection>
          <ModalRecipeIngredients>
              <label for="ingredients"><h2>Select Ingredients:</h2></label>
                <select id="ingredients" name="ingredients">
                  <option onClick={()=>handleIngredients('cucumber')} value="Cucumber">Cucumber</option>
                  <option onClick={()=>handleIngredients('avocado')} value="Avocado">Avocado</option>
                  <option onClick={()=>handleIngredients('fiat')} value="fiat">Fiat</option>
                  <option onClick={()=>handleIngredients('audi')} value="audi">Audi</option>
                </select>
        
                {ingredients?.map((e, i)=> (
                  <p>{e}</p>
                ))}
          </ModalRecipeIngredients>
          
          </form>
        
          
          <h1>Add Ingredients</h1>
          <h1>Add Category</h1>
          <h1>Add Sustainabilty Score</h1>
          <h1>Add Difficulty Score</h1>
          <h1>Add Steps +</h1>
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