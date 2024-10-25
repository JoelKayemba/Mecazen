
import { ADD_TO_RENDEZ_VOUS } from '../Actions/rendezVousAction';

const initialState = {
  rendezVous: [],
};

const historiqueReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_RENDEZ_VOUS:
      return {
        ...state,
        rendezVous: [...state.rendezVous, action.payload], 
      };
    default:
      return state;
  }
};

export default historiqueReducer;