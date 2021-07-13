import React, { useState } from "react";
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
import { AppContainer } from "../HomemakaseElements";
import webechef from "../../../images/webechef.jpg";
// Redux
import { connect } from "react-redux";
import { logOutUser, loginUser } from "../../../redux/actions/userActions";

const Profile = (props) => {
  const {
    user: {
      credentials: { handle, createdAt, imageUrl, location, bio, website },
      loading,
      authenticated,
      likes,
    },
  } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  let count = 0;
  let likedSushi = props.user.likes.map((e) =>
    props.data.sushis.find((x) => x.sushiId == e.sushiId)
  );
  console.log(props);
  // console.log(likedSushi[0].name);
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
        {/* <>
          {likedSushi.map((e) => (
            <p>{e.name}</p>
          ))}
        </> */}
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
};
const mapActionsToProps = {
  logOutUser,
  loginUser,
};
const mapStateToProps = (state) => ({
  user: state.user,
  data: state.data,
});

export default connect(mapStateToProps, mapActionsToProps)(Profile);
