import axios from "axios";
import { SET_USER, SET_ERRORS, CLEAR_ERRORS, LOADING_UI } from "../types";

export const loginUser = (userData, props) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .post(
      "https://us-central1-webesushi-a3bf0.cloudfunctions.net/api/login",
      userData
    )
    .then((res) => {
      console.log(res.data);

      const FBIdToken = `Bearer ${res.data.token}`;
      localStorage.setItem("FBIdToken", FBIdToken);
      axios.defaults.headers.common["Authorization"] = FBIdToken;
      dispatch(getUserData());
      dispatch({ type: CLEAR_ERRORS });
      console.log("Logged in successfully" + FBIdToken);
      console.log(localStorage.getItem("FBIdToken"));
      props.history.push("/");
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const getUserData = () => (dispatch) => {
  axios
    .get("/user")
    .then((res) => {
      dispatch({
        type: SET_USER,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
