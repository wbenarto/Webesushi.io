import React, { useEffect } from "react";
import Recipe from "../components/Homemakase/Recipe/Recipe";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getSushis } from "../redux/actions/dataActions";
import {
  HomemakaseContainer,
  AppMain,
} from "../components/Homemakase/HomemakaseElements";
import HomemakaseNav from '../components/Homemakase/HomemakaseNav'
import HomemakaseFooter from '../components/Homemakase/HomemakaseFooter'

const HomeMakase = (props) => {

  useEffect(() => {
    props.getSushis();
  }, []);

  return (
    <>
      <HomemakaseContainer>
        <HomemakaseNav />

        <AppMain>
         <Recipe />
        </AppMain>

        <HomemakaseFooter props={props}/>
        
      </HomemakaseContainer>
    </>
  );
};

HomeMakase.propTypes = {
  getSushis: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({ data: state.data });

export default connect(mapStateToProps, { getSushis })(HomeMakase);
