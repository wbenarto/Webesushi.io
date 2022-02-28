import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import EditDetails from "./EditDetails";
import {
  ProfileImage,
  ProfileBio,
  ProfileContainer,
  ProfileButton,
  ProfileBioLeft,
  ProfileBioRight,
  ProfileBioButton,
  ProfileStats,
} from "./ProfileElements";
import {AppContainer} from '../HomemakaseElements';
import {
  FormContent,
  Container,
  FormWrap,
  Icon,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
} from "../../Singin/SinginElements";
import Modal from '../../Modal/Modal'
import {
  RecipeCard,
  RecipeCardName,
  RecipeCardImage,
  RecipeCategory,
  CardIcons,
  CardButton,
  RecipeDisplay,
} from "../Recipe/RecipeElements";
import webechef from "../../../images/webechef.jpg";
import {
  FaRegHeart,
  FaHeart,
  FaRegPlusSquare,
} from "react-icons/fa";

// Redux
import { connect } from "react-redux";
import { logOutUser, loginUser } from "../../../redux/actions/userActions";
import {
  likeSushi,
  unlikeSushi,
  addShoppingCart,
} from "../../../redux/actions/dataActions";

const Profile = (props) => {
  const {
    user: {
      credentials: { handle, createdAt, imageUrl, location, bio, website },
      loading,
      authenticated,
      likes,
    },
  } = props;
  const [sushiCard, setSushiCard] = useState("");
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  let count = 0;
  let likedSushis = props.user.likes.map((e) =>
    props.data.sushis.find((x) => x.sushiId == e.sushiId)
  );
  console.log(props);

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

  const handleLogOut = () => {
    props.logOutUser();
  };

  const handleLogIn = () => {
    props.loginUser();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit button pressed");
    const userData = {
      email: email,
      password: password,
    };

    props.loginUser(userData, props.props.history);
    console.log(userData);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  let profileMarkup = !loading ? (
    authenticated ? (
      <AppContainer>
        <ProfileContainer>
          <ProfileBioLeft>
            <ProfileImage src={imageUrl} alt="profile" />
            <h4>Member since: </h4> <p> {createdAt.split("T")[0]}</p>
            <p>{location}</p>
          </ProfileBioLeft>

          <ProfileBio>
            <h1>{handle}</h1>
            <p>{bio}</p>
            <ProfileStats>
              <h3>
                {count} <br />
                Posts
              </h3>
              <h3>
                {count} <br /> Level
              </h3>
              <h3>
                {likes.length} <br />
                Likes
              </h3>
            </ProfileStats>
            {/* <ProfileBioRight></ProfileBioRight> */}

            <ProfileBioButton>
              <EditDetails />
              <ProfileButton onClick={handleLogOut}>Log Out</ProfileButton>
            </ProfileBioButton>
          </ProfileBio>
        </ProfileContainer>
          <RecipeDisplay>
          {likedSushis?.map((e,i) => (
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
         
          <CardButton data-hover='Add to Shopping List' onClick={() => handleAdd(e.ingredients)}>
            <FaRegPlusSquare />
          </CardButton>
        </CardIcons>
        
            <Modal  open={open} sushiCard={sushiCard} handleClose={handleClose}/> 
          </RecipeCard>
          ))}
          </RecipeDisplay>
          
      
      </AppContainer>
    ) : (
      <AppContainer>
        <ProfileContainer>
          <ProfileBioLeft>
            <ProfileImage src={webechef} alt="profile" />
          </ProfileBioLeft>

          <ProfileBio>
            <h1> </h1>
            <p> </p>
            <ProfileStats>
              <h3>
                - <br />
                Posts
              </h3>
              <h3>
                - <br /> Level
              </h3>
              <h3>
                - <br />
                Liked
              </h3>
            </ProfileStats>
            {/* <ProfileBioRight></ProfileBioRight> */}
          </ProfileBio>
        </ProfileContainer>

        <FormWrap>
          <FormContent>
            <Form onSubmit={handleSubmit} action="#">
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput
                onChange={handleEmail}
                id="email"
                name="email"
                type="email"
                required
              />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput
                onChange={handlePassword}
                id="password"
                name="password"
                type="password"
                required
              />
              {errors.error && (
                <h1 style={{ color: "white" }} variant="body2">
                  {errors.error.split("/")[1].split("-").join(" ")}
                </h1>
              )}

              <FormButton type="submit">Continue</FormButton>
              <Icon to="/signup">
                <FormLabel>Click here to sign up.</FormLabel>
              </Icon>
            </Form>
          </FormContent>
        </FormWrap>

        {/* <ProfileBio>Dummy Account for demo purposes</ProfileBio> */}
        {/* <ProfileButton onCLick={handleLogIn}>Log In</ProfileButton> */}
      </AppContainer>
    )
  ) : (
    <p>loading...</p>
  );

  return profileMarkup;
};

Profile.propTypes = {
  user: PropTypes.object.isRequired,
  logOutUser: PropTypes.func.isRequired,
  loginUser: PropTypes.func.isRequired,
  likeSushi: PropTypes.func.isRequired,
  unlikeSushi: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  user: state.user,
  data: state.data,
});
const mapActionToProps = {
  logOutUser,
  loginUser,
  likeSushi,
  unlikeSushi,
  addShoppingCart,
};


export default connect(mapStateToProps, mapActionToProps)(Profile);
