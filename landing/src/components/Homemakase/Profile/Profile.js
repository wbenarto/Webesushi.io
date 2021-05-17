import React from "react";
import PropTypes from "prop-types";
import EditDetails from "../EditDetails";
import { ProfileContainer } from "./ProfileElements";

// Redux
import { connect } from "react-redux";
import { logOutUser, uploadImage } from "../../../redux/actions/userActions";

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
          <img
            style={{ width: "150px", height: "150px" }}
            src={imageUrl}
            alt="profile"
          />
          <input
            type="file"
            id="imageInput"
            hidden="hidden"
            onChange={handleImageChange}
          />
          <button onClick={handleEditPicture}>Upload Image</button>
          <h1>{handle}</h1>
          <h2>{bio}</h2>
          <h3>{website}</h3>
          <h2>{location}</h2>
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
