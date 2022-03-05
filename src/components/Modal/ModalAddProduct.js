import React from "react";
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



function ModalAddProduct({ open, handleClose}) {
  return (
    <ModalMUI open={open} onClick={handleClose}>
  
      <ModalContainer>
          <ModalAddProductHeader>
            <h1>Add New Sushi Recipe</h1>
          </ModalAddProductHeader>
          <h1>Product Image Upload</h1>
          <h1>Add Ingredients</h1>
          <h1>Add Description</h1>
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