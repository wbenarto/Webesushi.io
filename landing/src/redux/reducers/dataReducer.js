import { SET_SUSHIS, LIKE_SUSHI, UNLIKE_SUSHI, LOADING_DATA } from "../types";

const initialState = {
  sushis: [],
  sushi: {},
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true,
      };
    case SET_SUSHIS:
      return {
        ...state,
        sushis: action.payload,
        loading: false,
      };

    case LIKE_SUSHI:
    case UNLIKE_SUSHI:
      let index = state.sushis.findIndex(
        (sushi) => sushi.sushiId === action.payload.sushiId
      );
      state.sushis[index] = action.payload;
      return {
        ...state,
      };
    default:
      return state;
  }
}
