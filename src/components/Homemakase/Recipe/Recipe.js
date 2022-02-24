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
          <CardButton data-hover='Save to favorite'>
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
          <CardButton data-hover='Add to Shopping List' onClick={() => handleAdd(e.ingredients)}>
            <FaRegPlusSquare />
          </CardButton>
        </CardIcons>

        <Modal  open={open} sushiCard={sushiCard} handleClose={handleClose}/> 
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
