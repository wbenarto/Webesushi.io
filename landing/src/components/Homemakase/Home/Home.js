import React, { useEffect, useState } from "react";
import {
  HomeInfo,
  SushiCategoryButton,
  Steps,
  HomeH2,
  HomeP,
  CartContainer,
  CartImage,
  CartP,
  CartIcon,
  CartButtons,
  CartButton,
} from "./HomeElements";
import { AppContainer } from "../HomemakaseElements";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  FaRegHeart,
  FaRegPlusSquare,
  FaCheck,
  FaTrash,
  FaSortDown,
} from "react-icons/fa";
import { data2 } from "../../../data/data2";

const Home = (props) => {
  const [list, setList] = useState([]);
  const { shoppingCart } = props.data;
  console.log(props);

  const getItemInfo = () => {
    let res = [];
    let temp = [];

    for (let i = 0; i < shoppingCart.length; i++) {
      res.push(data2.find((x) => x.term == shoppingCart[i]));
    }
    setList(res);
  };
  useEffect(() => {
    getItemInfo();
  }, []);

  console.log(list);
  // console.log(data2.filter((e) => e.name == shoppingCart.name));
  // console.log(data2.filter((e) => e.term == "shrimp tempura"));
  // console.log(shoppingCart.map((e) => data2.filter((x) => x.term == e)[0]));
  return (
    <AppContainer>
      {shoppingCart == 0 ? (
        <HomeInfo>
          <HomeH2>Omakase</HomeH2>
          <HomeP>
            Omakase (Japanese: お任せ, Hepburn: o-makase) is a Japanese phrase,
            used when ordering sushi in restaurants, that means 'I'll leave it
            up to you' (from Japanese 'to entrust' (任せる, makaseru)).
          </HomeP>
          <br />
          <HomeH2>Let's Homemakase</HomeH2>
          <br />
          <HomeP>Go to "Home" and pick your sushi recipe</HomeP>
          <br />
          <Steps>1</Steps>
          <FaRegHeart style={{ fontSize: "1.4rem" }} />
          <HomeP>
            Click this button to save a sushi recipe into your favorites.
          </HomeP>
          <br />
          <Steps>2</Steps>
          <FaRegPlusSquare style={{ fontSize: "1.4rem" }} />
          <HomeP>Click this button to compile your shopping list</HomeP>

          <br />
          <Steps>3</Steps>
          <HomeP>Scroll down below for step-by-step guide</HomeP>
        </HomeInfo>
      ) : (
        <>
          <h1>Shopping List: </h1>

          {list.map((e) => (
            <CartContainer>
              <CartP>{e.name}</CartP>
              <CartImage src={e.images}></CartImage>
              <CartIcon>
                {e.sustainability == "bad" ? <FaSortDown /> : <></>}
              </CartIcon>

              <CartButtons>
                <CartButton>
                  <FaCheck />
                </CartButton>
                <CartButton>
                  <CartP>
                    <FaTrash />
                  </CartP>
                </CartButton>
              </CartButtons>
            </CartContainer>
          ))}
          {/* {shoppingCart.map((e) => (
            <SushiCategoryButton>{e}</SushiCategoryButton>
          ))} */}
        </>
      )}
      <h1>How To:</h1>
    </AppContainer>
  );
};

Home.propTypes = {
  data: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
  user: state.user,
});
export default connect(mapStateToProps)(Home);
