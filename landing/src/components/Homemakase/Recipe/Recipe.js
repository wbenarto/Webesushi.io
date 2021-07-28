import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  RecipeDisplay,
  RecipeCard,
  RecipeCardName,
  RecipeCardImage,
  RecipeCategory,
  CardIcons,
  CardButton,
  ModalContainer,
  ModalTitle,
  ModalImage,
  ModalDesc,
  ModalCategory,
  ModalPoints,
  ModalBox,
  Modalh1,
  RecipeFilter,
  RecipeFilterButton,
} from "./RecipeElements";
import { AppContainer } from "../HomemakaseElements";
import PropTypes from "prop-types";
import { sushi } from "../../../data/data";
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
  FaRegListAlt,
  FaRegPlusSquare,
} from "react-icons/fa";
import { FiFrown, FiSmile } from "react-icons/fi";
import Modal from "@material-ui/core/Modal";

const Recipe = (props) => {
  const [sushiCard, setSushiCard] = useState("");
  const [open, setOpen] = useState(false);
  const [shoppingCart, setShoppingCart] = useState([]);
  const [filterOpen, setFilterOpen] = useState(false);

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
  console.log(sushiCard);
  const handleOpen = (e) => {
    setSushiCard(e);
    setOpen(true);
    console.log(e);
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
    console.log(props);
    // setShoppingCart([...leanCart]);
    props.addShoppingCart([...leanCart]);
    // props.data.shoppingCart = shoppingCart;
  };

  const recentSushisMarkUp = loading ? (
    <RecipeCardName>Loading...</RecipeCardName>
  ) : (
    sushis.map((e) => (
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
          <CardButton onClick={() => handleAdd(e.ingredients)}>
            <FaRegPlusSquare />
          </CardButton>
        </CardIcons>
        <Modal open={open} onClick={handleClose}>
          <ModalContainer>
            {" "}
            <ModalTitle>{sushiCard.name}</ModalTitle>
            <ModalImage
              onClick={() => handleOpen(e.sushiId)}
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
          </ModalContainer>
        </Modal>
      </RecipeCard>
    ))
  );

  return (
    <AppContainer>
      <RecipeFilterButton
        onClick={() => {
          filterOpen == false ? setFilterOpen(true) : setFilterOpen(false);
        }}
      >
        <h1>filter</h1>
      </RecipeFilterButton>

      <RecipeFilter open={filterOpen}>
        <h1>RAW VEG COOKED HO</h1>
      </RecipeFilter>

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
