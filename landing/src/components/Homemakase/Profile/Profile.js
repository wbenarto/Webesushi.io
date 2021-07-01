import React from "react";
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
import { AppContainer } from "../HomemakaseElements";
// Redux
import { connect } from "react-redux";
import { logOutUser, loginUser } from "../../../redux/actions/userActions";

const Profile = (props) => {
  const {
    user: {
      credentials: { handle, createdAt, imageUrl, location, bio, website },
      loading,
      authenticated,
    },
  } = props;

  let count = 0;

  const handleLogOut = () => {
    props.logOutUser();
  };

  const handleLogIn = () => {
    props.loginUser();
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
                20 <br />
                Posts
              </h3>
              <h3>
                1 <br /> Level
              </h3>
              <h3>
                10 <br />
                Likes
              </h3>
            </ProfileStats>
            <ProfileBioRight></ProfileBioRight>

            <ProfileBioButton>
              <EditDetails />
              <ProfileButton onClick={handleLogOut}>Log Out</ProfileButton>
            </ProfileBioButton>
          </ProfileBio>
        </ProfileContainer>
      </AppContainer>
    ) : (
      <AppContainer>
        <h1>No Profile Found</h1>
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
const mapActionsToProps = { logOutUser, loginUser };
const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, mapActionsToProps)(Profile);
