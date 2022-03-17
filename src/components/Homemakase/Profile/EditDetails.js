import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { ProfileButton } from "./ProfileElements";
import { connect } from "react-redux";
import {
  editUserDetails,
  uploadImage,
} from "../../../redux/actions/userActions";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

// import EditIcon from "@material-ui/icons/Edit";

const EditDetails = (props) => {
  const [bio, setBio] = useState("");
  const [website, setWebsite] = useState("");
  const [location, setLocation] = useState("");
  const [open, setOpen] = useState(false);

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

  useEffect(() => {
    const { credentials } = props;
    mapUserDetailsToState(credentials);
  }, []);

  const handleOpen = () => {
    setOpen(true);
    mapUserDetailsToState(props.credentials);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const mapUserDetailsToState = (credentials) => {
    credentials.bio ? setBio(credentials.bio) : setBio("");
    credentials.website ? setWebsite(credentials.website) : setWebsite("");
    credentials.location ? setLocation(credentials.location) : setLocation("");
  };

  const handleBio = (event) => {
    setBio(event.target.value);
  };

  const handleLocation = (event) => {
    setLocation(event.target.value);
  };
  const handleWebsite = (event) => {
    setWebsite(event.target.value);
  };
  const handleSubmit = () => {
    const userDetails = {
      bio: bio,
      website: website,
      location: location,
    };
    props.editUserDetails(userDetails);
    handleClose();
  };

  return (
    <>
      <ProfileButton onClick={handleOpen}>Edit Profile</ProfileButton>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>Edit your details</DialogTitle>
        <DialogContent>
          <form>
            <TextField
              name="bio"
              type="text"
              label="Bio"
              multiline
              placeholder="A short bio about yourself"
              value={bio}
              onChange={handleBio}
              fullWidth
            />
            <TextField
              name="website"
              type="text"
              label="Website"
              placeholder="Your personal/professional website"
              value={website}
              onChange={handleWebsite}
              fullWidth
            />
            <TextField
              name="location"
              type="text"
              label="Location"
              placeholder="Where you live"
              value={location}
              onChange={handleLocation}
              fullWidth
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="primary"
            onClick={handleEditPicture}
          >
            Upload Image
          </Button>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Save
          </Button>
          <input
            type="file"
            id="imageInput"
            hidden="hidden"
            onChange={handleImageChange}
          />
        </DialogActions>
      </Dialog>
    </>
  );
};

EditDetails.propTypes = {
  editUserDetails: PropTypes.func.isRequired,
};

const mapActionsToProps = { uploadImage, editUserDetails };

const mapStateToProps = (state) => ({
  credentials: state.user.credentials,
  uploadImage: PropTypes.func.isRequired,
});
export default connect(mapStateToProps, mapActionsToProps)(EditDetails);
