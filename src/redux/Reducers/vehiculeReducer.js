import { ADD_VEHICULE, EDIT_VEHICULE, DELETE_VEHICULE, SEARCH_RECALLS, RESET_RECALLS , ERROR_SEARCH , SEARCH_VEHICLE_BY_VIN} from '../Actions/vehiculeAction';

const initialState = {
  vehicules: [],
  vinData:[],
  recalls: [], // Stockage des rappels
  error: null,
};

const vehiculeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_VEHICULE:
      return {
        ...state,
        vehicules: [...state.vehicules, action.payload],
      };
    case EDIT_VEHICULE:
      return {
        ...state,
        vehicules: state.vehicules.map((vehicule) =>
          vehicule.id === action.payload.id ? { ...vehicule, ...action.payload } : vehicule
        ),
      };
    case DELETE_VEHICULE:
      return {
        ...state,
        vehicules: state.vehicules.filter((vehicule) => vehicule.id !== action.payload),
      };

    case SEARCH_VEHICLE_BY_VIN:
      return {
            ...state,
            vinData: action.payload,
            error: null,
            };

    case SEARCH_RECALLS:
      return {
        ...state,
        recalls: action.payload,
      };
    case RESET_RECALLS:
      return {
        ...state,
        recalls: [],
      };

      case ERROR_SEARCH:
        return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default vehiculeReducer;
