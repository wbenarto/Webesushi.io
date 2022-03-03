import React from 'react'
import { 
    AppMain,
    HomemakaseContainer 
} from "../components/Homemakase/HomemakaseElements";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addShoppingCart } from "../redux/actions/dataActions";
import IngredientsMain from '../components/Homemakase/Ingredients/Ingredients'
import HomemakaseFooter from "../components/Homemakase/HomemakaseFooter";
import HomemakaseNav from '../components/Homemakase/HomemakaseNav'

const Ingredients = (props) => {
    return (
        <>
        <HomemakaseContainer>
            <HomemakaseNav />
            {/* <h1>Henlo</h1> */}
            <AppMain>
                <IngredientsMain />
            </AppMain>
            
            <HomemakaseFooter props={props} />
        </HomemakaseContainer>
        </>
    )
}


Ingredients.propTypes = {
    data: PropTypes.object.isRequired,
};
  
const mapStateToProps = (state) => ({
    data: state.data,
    user: state.user,
});
  
const mapActionToProps = {
    addShoppingCart,
};
  
export default connect(mapStateToProps, mapActionToProps)(Ingredients);

