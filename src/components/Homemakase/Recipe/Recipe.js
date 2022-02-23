import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  RecipeDisplay,
  RecipeCard,
  RecipeCardName,
  RecipeCardImage,
  RecipeCategory,
  CardIcons,
  CardButton,
} from "./RecipeElements";
import { ModalContainer,
  ModalTitle,
  ModalImage,
  ModalDesc,
  ModalCategory,
  ModalPoints,
  ModalBox,
  Modalh1,
  ModalIngredients,
  ModalIngredient} from '../../Modal/ModalElements'
import Modal from '../../Modal/Modal'
import { AppContainer } from "../HomemakaseElements";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  getSushis,
  likeSushi,
  unlikeSushi,
  addShoppingCart,
} from "../../../redux/actions/dataActions";
import {
  FaRegHeart,
  FaHeart,
  FaRegPlusSquare,
} from "react-icons/fa";

// import Modal from "@material-ui/core/Modal";

const Recipe = (props) => {
  const [sushiCard, setSushiCard] = useState("");
  const [sushiIngredients, setSushiIngredients] = useState([])
  const [open, setOpen] = useState(false);
  const { sushis, loading } = props.data;
  const { authenticated } = props.user;


  const likedSushi = (sushiId) => {
    if (
      props.user.likes &&
      props.user.likes.find((like) => like.sushiId == sushiId)
    ) {
      console.log(sushiId, props.user.likes);
      return true;
    } else return false;
  };

  const handleOpen = (e) => {
    setSushiCard(e);
    setSushiIngredients(e.ingredients)
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLike = (sushiId) => {
    props.likeSushi(sushiId);
  };

  const handleUnlike = (sushiId) => {
    props.unlikeSushi(sushiId);
  };

  const handleAdd = (ingr) => {
    const leanCart = new Set([...props.data.shoppingCart, ...ingr]);
    console.log("handleAdd Recipe " + [...leanCart]);
    props.addShoppingCart([...leanCart]);
  };

  const recentSushisMarkUp = loading ? (
    <RecipeCardName>Loading...</RecipeCardName>
  ) : (
    sushis.map((e, i) => (
      <RecipeCard key={e.sushiId} e={e}>
        <RecipeCategory e={e.category}>
          {e.category == "vegetarian" ? "VEG" : e.category.toUpperCase()}
          {/* {e.category.split("").splice(0, 4).join("")} */}
        </RecipeCategory>
        <RecipeCardName onClick={() => handleOpen(e)}>{e.name}</RecipeCardName>
        <RecipeCardImage onClick={() => handleOpen(e)} src={e.image} />
        <CardIcons>
          <CardButton>
            {!authenticated ? (
              <Link to="/signin">
                {" "}
                <FaRegHeart />{" "}
              </Link>
            ) : likedSushi(e.sushiId) ? (
              <FaHeart onClick={() => handleUnlike(e.sushiId)} />
            ) : (
              <FaRegHeart onClick={() => handleLike(e.sushiId)} />
            )}
          </CardButton>
          {/* <CardButton>
            <FaRegListAlt />
          </CardButton> */}
          <CardButton className='add' onClick={() => handleAdd(e.ingredients)}>
            {/* <FaRegPlusSquare /> */}
          </CardButton>
        </CardIcons>

        <Modal  open={open} sushiCard={sushiCard} handleClose={handleClose}/> 

{/*         
        <Modal open={open} onClick={handleClose}>
          <ModalContainer>
            {" "}
            <ModalTitle>{sushiCard.name}</ModalTitle>
            <ModalImage
              src={sushiCard.image}
            />
            <CardIcons>
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
            </CardIcons>
            <ModalDesc>{sushiCard.desc}</ModalDesc>
            <CardIcons>
              <ModalBox>
                <Modalh1>Category</Modalh1>
                <ModalCategory e={sushiCard.category}>
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
              {sushiIngredients.map((e,i) => (
                    <ModalIngredient key={i}>{e.charAt(0).toUpperCase() + e.slice(1)}</ModalIngredient>
                  ))}
              </ModalIngredients>
          </ModalContainer>
        </Modal> */}
      </RecipeCard>
    ))
  );


  return (
    <AppContainer>
      <RecipeDisplay>
        {sushis.length !== 0 ? (
          recentSushisMarkUp
        ) : (
          <RecipeCardName>Connecting to Firebase!</RecipeCardName>
        )}
      </RecipeDisplay>
    </AppContainer>
  );
};

Recipe.propTypes = {
  data: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  likeSushi: PropTypes.func.isRequired,
  unlikeSushi: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({ data: state.data, user: state.user });
const mapActionToProps = {
  likeSushi,
  unlikeSushi,
  addShoppingCart,
};

export default connect(mapStateToProps, mapActionToProps)(Recipe);
