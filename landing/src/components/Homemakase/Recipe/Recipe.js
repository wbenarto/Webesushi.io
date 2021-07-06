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
} from "./RecipeElements";
import { AppContainer } from "../HomemakaseElements";
import PropTypes from "prop-types";
import { sushi } from "../../../data/data";
import { connect } from "react-redux";
import {
  getSushis,
  likeSushi,
  unlikeSushi,
} from "../../../redux/actions/dataActions";
import {
  FaRegHeart,
  FaHeart,
  FaRegListAlt,
  FaRegPlusSquare,
} from "react-icons/fa";
const Recipe = (props) => {
  const [sushiCard, setSushiCard] = useState("");
  const [hover, onHover] = useState("");
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
      return true;
    } else return false;
  };

  // const likeButton = !authenticated ? (
  //   <Link to="/signin">
  //     {" "}
  //     <FaRegHeart />{" "}
  //   </Link>
  // ) : likedSushi ? (
  //   <FaHeart onClick={() => handleUnlike(e.sushiId)} />
  // ) : (
  //   <FaRegHeart onClick={() => handleLike(e.sushiId)} />
  // );
  const recentSushisMarkUp = loading ? (
    <p>Loading...</p>
  ) : (
    sushis.map((e) => (
      <RecipeCard key={e.sushiId} e={e}>
        <RecipeCardName>{e.name}</RecipeCardName>
        <RecipeCardImage src={e.image} />
        <CardIcons>
          <CardButton>
            {!authenticated ? (
              <Link to="/signin">
                {" "}
                <FaRegHeart />{" "}
              </Link>
            ) : false ? (
              <FaHeart onClick={() => handleUnlike(e.sushiId)} />
            ) : (
              <FaRegHeart onClick={() => handleLike(e.sushiId)} />
            )}
            {/* {liked ? (
              <FaHeart onClick={() => handleUnlike(e.sushiId)} />
            ) : (
              <FaRegHeart onClick={() => handleLike(e.sushiId)} />
            )} */}
          </CardButton>
          {/* <CardButton>
            <FaRegListAlt />
          </CardButton> */}
          <CardButton onClick={() => handleAdd(e.ingredients)}>
            <FaRegPlusSquare />
          </CardButton>
        </CardIcons>
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
    const leanCart = new Set([...shoppingCart, ...ingr]);
    setShoppingCart([...leanCart]);
  };
  console.log(shoppingCart);
  useEffect(() => {
    props.getSushis();
    console.log(props);
    console.log(likedSushi);
  }, []);

  return (
    <AppContainer>
      <RecipeDisplay>
        {sushis.length !== 0 ? (
          recentSushisMarkUp
        ) : (
          <h1>something is wrong...</h1>
        )}
      </RecipeDisplay>
    </AppContainer>
  );
};

Recipe.propTypes = {
  getSushis: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  likeSushi: PropTypes.func.isRequired,
  unlikeSushi: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({ data: state.data, user: state.user });
const mapActionToProps = {
  likeSushi,
  unlikeSushi,
  getSushis,
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
