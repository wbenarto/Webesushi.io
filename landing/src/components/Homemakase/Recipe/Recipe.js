import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  RecipeDisplay,
  RecipeCard,
  RecipeCardName,
  RecipeCardImage,
  CardIcons,
  CardButton,
  ModalContainer,
  ModalTitle,
  ModalImage,
  ModalDesc,
  ModalCategory,
  ModalPoints,
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
import Modal from "@material-ui/core/Modal";

const Recipe = (props) => {
  const [sushiCard, setSushiCard] = useState("");
  const [hover, onHover] = useState("");
  const [open, setOpen] = useState(false);
  const [shoppingCart, setShoppingCart] = useState([]);
  // const [likedSushi, setLikedSushi] = useState([]);
  const [liked, setLiked] = useState(false);

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
    setOpen(true);
    console.log(e);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const recentSushisMarkUp = loading ? (
    <RecipeCardName>Loading...</RecipeCardName>
  ) : (
    sushis.map((e) => (
      <RecipeCard key={e.sushiId} e={e}>
        <RecipeCardName>{e.name}</RecipeCardName>
        <RecipeCardImage onClick={() => handleOpen(e)} src={e.image} />
        <CardIcons>
          <CardButton>
            {!authenticated ? (
              <Link to="/signin">
                {" "}
                <FaRegHeart color="black" />{" "}
              </Link>
            ) : likedSushi(e.sushiId) ? (
              <FaHeart color="black" onClick={() => handleUnlike(e.sushiId)} />
            ) : (
              <FaRegHeart color="black" onClick={() => handleLike(e.sushiId)} />
            )}
          </CardButton>
          {/* <CardButton>
            <FaRegListAlt />
          </CardButton> */}
          <CardButton onClick={() => handleAdd(e.ingredients)}>
            <FaRegPlusSquare />
          </CardButton>
        </CardIcons>
        <Modal
          open={open}
          data={e}
          onClick={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <ModalContainer>
            {" "}
            <ModalTitle style={{ backgroundColor: "white" }}>
              {sushiCard.name}
            </ModalTitle>
            <ModalImage
              onClick={() => handleOpen(e.sushiId)}
              src={sushiCard.image}
            />
            <ModalDesc style={{ backgroundColor: "white" }}>
              {sushiCard.desc}
            </ModalDesc>
            Category
            <ModalCategory e={sushiCard.category}>
              {sushiCard.category}
            </ModalCategory>
            Difficulty <ModalPoints>{sushiCard.dishPoint}</ModalPoints>
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
          </ModalContainer>
        </Modal>
      </RecipeCard>
    ))
  );
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

// {sushi.map((e) => (
//   <RecipeCard key={e.id}>
//     <RecipeCardName>{e.name}</RecipeCardName>
//     <RecipeCardImage src={e.images} />
//     <CardIcons>
//       <CardButton onClick={() => handleLike(e.name)}>
//         {liked ? <FaHeart /> : <FaRegHeart />}
//       </CardButton>

//       <CardButton onClick={() => handleAdd(e.ingredients)}>
//         <FaRegPlusSquare />
//       </CardButton>
//     </CardIcons>
//   </RecipeCard>
// ))}
