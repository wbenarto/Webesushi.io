import React from "react";
import PropTypes from "prop-types";
import EditDetails from "../Homemakase/EditDetails";
import {
  ProfileContainer,
  ProfileImage,
  ProfileCard,
  HeaderText,
  DescText,
} from "./Profile/ProfileElements";

// Redux
import { connect } from "react-redux";
import { logOutUser, uploadImage } from "../../redux/actions/userActions";

const Profile = (props) => {
  const {
    user: {
      credentials: { handle, createdAt, imageUrl, location, bio, website },
      loading,
      authenticated,
    },
  } = props;

  const handleImageChange = (event) => {
    const image = event.target.files[0];
    const formData = new FormData();

    formData.append("image", image, image.name);
    props.uploadImage(formData);
  };

  const handleEditPicture = () => {
    const fileInput = document.getElementById("imageInput");
    fileInput.click();
  };

  const handleLogOut = () => {
    props.logOutUser();
  };

  let profileMarkup = !loading ? (
    authenticated ? (
      <ProfileContainer>
        <div>
          <ProfileImage src={imageUrl}></ProfileImage>

          <input
            type="file"
            id="imageInput"
            hidden="hidden"
            onChange={handleImageChange}
          />
          <button onClick={handleEditPicture}>Upload Image</button>
          <ProfileCard>
            <HeaderText>{handle}</HeaderText>
            <DescText>{bio}</DescText>
            <DescText>{website}</DescText>
            <DescText>{location}</DescText>
          </ProfileCard>
          <button onClick={handleLogOut}>Log Out</button>
          <EditDetails />
        </div>
      </ProfileContainer>
    ) : (
      <ProfileContainer>
        <h1>No Profile Found</h1>
      </ProfileContainer>
    )
  ) : (
    <p>loading...</p>
  );

  return profileMarkup;
};

Profile.propTypes = {
  user: PropTypes.object.isRequired,
  logOutUser: PropTypes.func.isRequired,
  uploadImage: PropTypes.func.isRequired,
};
const mapActionsToProps = { logOutUser, uploadImage };
const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, mapActionsToProps)(Profile);
