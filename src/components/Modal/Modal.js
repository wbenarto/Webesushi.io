import React from "react";
import {ModalBackground1, ModalContainer, ModalTitle,
    ModalImage,
    ModalDesc,
    ModalCategory,
    ModalPoints,
    ModalBox,
    Modalh1,
    ModalIngredients,
    ModalIngredient} from './ModalElements'
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



function Modal({ open , sushiCard, handleClose}) {
  return (
    <ModalMUI open={open} onClick={handleClose}>
    <ModalBackground1>
      <ModalContainer>
      <ModalTitle>{sushiCard.name}</ModalTitle>
            <ModalImage
              src={sushiCard.image}
            />
            {/* <CardIcons>
              <CardButton>
                {!authenticated ? (
                  <Link to="/signin">
                    {" "}
                    <FaRegHeart color="black" />{" "}
                  </Link>
                ) : likedSushi(sushiCard.sushiId) ? (
                  <FaHeart
                    color="black"
                    onClick={() => handleUnlike(sushiCard.sushiId)}
                  />
                ) : (
                  <FaRegHeart
                    color="black"
                    onClick={() => handleLike(sushiCard.sushiId)}
                  />
                )}
              </CardButton>
              <CardButton onClick={() => handleAdd(sushiCard.ingredients)}>
                <FaRegPlusSquare />
              </CardButton>
            </CardIcons> */}
            <ModalDesc>{sushiCard.desc}</ModalDesc>
            <CardIcons>
              <ModalBox>
                <Modalh1>Category</Modalh1>
                <ModalCategory e={sushiCard.category} >
                  {sushiCard.category ? sushiCard.category.toUpperCase() : ""}
                </ModalCategory>
              </ModalBox>
              <ModalBox>
                <Modalh1>Difficulty</Modalh1>
                <ModalPoints>{sushiCard.dishPoint}</ModalPoints>
              </ModalBox>
              <ModalBox>
                <Modalh1> Sustainability</Modalh1>

                {sushiCard.sustainability == "good" ? (
                  <ModalPoints>
                    <FiSmile />
                  </ModalPoints>
                ) : (
                  <ModalPoints>
                    <FiFrown />
                  </ModalPoints>
                )}
              </ModalBox>
            </CardIcons>
              
              <ModalIngredients>
              <ModalTitle>Ingredients List:</ModalTitle>
              {sushiCard?.ingredients?.map((e,i) => (
                    <ModalIngredient key={i}>{e.charAt(0).toUpperCase() + e.slice(1)}</ModalIngredient>
                  ))}
              </ModalIngredients>
      </ModalContainer>
    </ModalBackground1>
    </ModalMUI>
    
  );
}

export default Modal;