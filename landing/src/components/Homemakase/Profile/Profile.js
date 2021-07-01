import React from "react";
import PropTypes from "prop-types";
import EditDetails from "./EditDetails";
import {
  ProfileImage,
  ProfileBio,
  ProfileContainer,
  ProfileButton,
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
          <div>
            <ProfileImage src={imageUrl} alt="profile" />
            <h1>{handle}</h1>
          </div>

          <ProfileBio>
            <h3>{bio}</h3>
            <p>Member since: {createdAt.split("T")[0]}</p>
            <p>{location}</p>

            <ProfileContainer>
              <EditDetails />
              <ProfileButton onClick={handleLogOut}>Log Out</ProfileButton>
            </ProfileContainer>
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
  logInUser: PropTypes.func.isRequired,
};
const mapActionsToProps = { logOutUser, loginUser };
const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, mapActionsToProps)(Profile);
