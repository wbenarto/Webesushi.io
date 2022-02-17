import {
  SET_SUSHIS,
  LOADING_DATA,
  LIKE_SUSHI,
  UNLIKE_SUSHI,
  SHOPPING_CART,
} from "../types";
import axios from "axios";

// Get all sushis
export const getSushis = () => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get("/sushis")
    .then((res) => {
      dispatch({
        type: SET_SUSHIS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: SET_SUSHIS,
        payload: [],
      });
    });
};

// Like sushi
export const likeSushi = (sushiId) => (dispatch) => {
  axios
    .get(`/sushi/${sushiId}/like`)
    .then((res) => {
      dispatch({
        type: LIKE_SUSHI,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: LIKE_SUSHI,
        payload: [],
      });
    });
};

// Unlike sushi
export const unlikeSushi = (sushiId) => (dispatch) => {
  axios
    .get(`/sushi/${sushiId}/unlike`)
    .then((res) => {
      dispatch({
        type: UNLIKE_SUSHI,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: UNLIKE_SUSHI,
        payload: [],
      });
    });
};

export const addShoppingCart = (arr) => (dispatch) => {
  return dispatch({
    type: SHOPPING_CART,
    payload: arr,
  });
};
