import React, { useEffect, useState } from "react";
import {
  HomeInfo,
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
import {
  ModalContainer,
  ModalImage,
  ModalDesc,
  CardIcons,
  ModalBox,
  Modalh1,
  ModalCategory,
  ModalPoints,
  ModalTitle,
} from "../Recipe/RecipeElements";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addShoppingCart } from "../../../redux/actions/dataActions";
import {
  FaRegHeart,
  FaRegPlusSquare,
  FaCheck,
  FaTrash,
  FaRegCheckCircle,
  FaExclamationTriangle,
} from "react-icons/fa";
import { FiFrown, FiSmile } from "react-icons/fi";
import Modal from "@material-ui/core/Modal";
import { data2 } from "../../../data/data2";

const Home = (props) => {
  const [list, setList] = useState([]);
  const [checked, setChecked] = useState([]);
  const [open, setOpen] = useState(false);
  const [sushiCard, setSushiCard] = useState("");
  const { shoppingCart } = props.data;

  // console.log(props);

  useEffect(() => {
    getItemInfo();
  }, []);

  const handleOpen = (e) => {
    let sush = data2.find((x) => x.term == e);
    setSushiCard(sush);
    setOpen(true);
    console.log(e);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getItemInfo = () => {
    let res = [];

    for (let i = 0; i < shoppingCart.length; i++) {
      res.push(data2.find((x) => x.term == shoppingCart[i]));
    }
    setList(res);
  };

  const handleCheck = (ing) => {
    const lean = new Set([...checked, ing]);
    if (checked[ing]) {
    }
    setChecked([...lean]);
  };

  const handleUncheck = (ing) => {
    let index = checked.indexOf(ing);
    if (index > -1) {
      checked.splice(index, 1);
    }

    setChecked([...checked]);
  };

  const checkedIngredients = (ing) => {
    if (checked && checked.find((e) => e == ing)) return true;
    else return false;
  };

  const handleDelete = (ing) => {
    console.log(props);
    console.log(shoppingCart);

    let index = shoppingCart.indexOf(ing);
    if (index > -1) {
      shoppingCart.splice(index, 1);
    }
    console.log(shoppingCart);
    setList([...shoppingCart]);
    props.addShoppingCart([...shoppingCart]);
    getItemInfo();
  };

  console.log(list);
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
          <h1>
            Shopping List: {checked.length} / {shoppingCart.length} Checked.{" "}
          </h1>{" "}
          <p>
            Sustainability Warning :
            <FaExclamationTriangle style={{ color: "red" }} />{" "}
          </p>
          {list.map((e) => (
            <CartContainer checked={checkedIngredients(e.term)} key={e.id}>
              <CartP
                onClick={() => handleOpen(e.term)}
                checked={checkedIngredients(e.term)}
              >
                {e.name}
              </CartP>
              <CartImage
                onClick={() => handleOpen(e.term)}
                src={e.images}
              ></CartImage>
              <Modal open={open} onClick={handleClose}>
                <ModalContainer>
                  <ModalTitle>{sushiCard.name}</ModalTitle>
                  <ModalImage src={sushiCard.images} />
                  <ModalDesc>{sushiCard.desc}</ModalDesc>
                  <CardIcons>
                    <ModalBox>
                      <Modalh1>Category</Modalh1>
                      <ModalCategory e={sushiCard.type}>
                        {sushiCard.type}
                      </ModalCategory>
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

                  {sushiCard.sustainability == "bad" ? (
                    <ModalContainer>
                      <Modalh1>
                        {" "}
                        <FaExclamationTriangle
                          style={{
                            justifySelf: "center",
                            color: "red",
                            marginRight: "10px",
                          }}
                        />
                        Sustainability concerns:{" "}
                      </Modalh1>

                      <ModalDesc> {sushiCard.reason}</ModalDesc>
                    </ModalContainer>
                  ) : (
                    <></>
                  )}
                </ModalContainer>
              </Modal>
              <CartIcon>
                {e.sustainability == "bad" ? <FaExclamationTriangle /> : <></>}
              </CartIcon>

              <CartButtons>
                <CartButton>
                  {/* <FaCheck onClick={() => handleCheck(e.term)} /> */}
                  {checkedIngredients(e.term) ? (
                    <FaRegCheckCircle onClick={() => handleUncheck(e.term)} />
                  ) : (
                    <FaCheck onClick={() => handleCheck(e.term)} />
                  )}
                </CartButton>
                <CartButton>
                  <FaTrash onClick={() => handleDelete(e.term)} />
                </CartButton>
              </CartButtons>
            </CartContainer>
          ))}
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

const mapActionToProps = {
  addShoppingCart,
};

export default connect(mapStateToProps, mapActionToProps)(Home);
