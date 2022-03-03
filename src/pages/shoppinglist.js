import React from "react";
import { 
    AppMain,
    HomemakaseContainer 
} from "../components/Homemakase/HomemakaseElements";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addShoppingCart } from "../redux/actions/dataActions";
import ShoppingListMain from '../components/Homemakase/ShoppingList/ShoppingList'
import HomemakaseFooter from "../components/Homemakase/HomemakaseFooter";
import HomemakaseNav from '../components/Homemakase/HomemakaseNav'

const ShoppingList = (props) => {

  return (
    <>
    <HomemakaseContainer>
      <HomemakaseNav />
        
      <AppMain>
        <ShoppingListMain />
      </AppMain>
    
      <HomemakaseFooter props={props} />

    </HomemakaseContainer>
    </>
  );
};

ShoppingList.propTypes = {
  data: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
  user: state.user,
});

const mapActionToProps = {
  addShoppingCart,
};

export default connect(mapStateToProps, mapActionToProps)(ShoppingList);
