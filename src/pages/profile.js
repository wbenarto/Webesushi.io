import React from "react";
import ProfileMain from "../components/Homemakase/Profile/Profile";
import {
  HomemakaseContainer,
  AppMain,
} from "../components/Homemakase/HomemakaseElements";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addShoppingCart } from "../redux/actions/dataActions";
import HomemakaseNav from '../components/Homemakase/HomemakaseNav'
import HomemakaseFooter from '../components/Homemakase/HomemakaseFooter'

const Profile = (props) => {
  return (
    <>
       <HomemakaseContainer>
        <HomemakaseNav />

        <AppMain>
          <ProfileMain />
        </AppMain>

        <HomemakaseFooter props={props}/>
       </HomemakaseContainer>
      
    </>
  );
};
Profile.propTypes = {
  data: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
  user: state.user,
});

const mapActionToProps = {
  addShoppingCart,
};

export default connect(mapStateToProps, mapActionToProps)(Profile);