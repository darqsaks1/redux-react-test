import { SET_SCORE } from "../actions/action-types";

const initialState = {
  score: 0,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SCORE:
      return {
        ...state,
        score: action.payload,
      };
    default:
      return state;
  }
};

export default appReducer;
