// mechanicReducer.js
import { FETCH_MECHANICS, FETCH_MECHANICS_ERROR } from '../Actions/mechanicAction';

const initialState = {
  mechanics: [],
  error: null,
};

const mechanicReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MECHANICS:
      return {
        ...state,
        mechanics: action.payload,
        error: null,
      };
    case FETCH_MECHANICS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default mechanicReducer;
