// reparationReducer.js
import { FETCH_REPARATIONS } from '../Actions/reparationAction';

const initialState = {
  reparations: [],
};

const reparationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REPARATIONS:
      return {
        ...state,
        reparations: action.payload,
      };
    default:
      return state;
  }
};

export default reparationReducer;
