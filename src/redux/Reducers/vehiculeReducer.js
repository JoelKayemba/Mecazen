import { ADD_VEHICULE, EDIT_VEHICULE, DELETE_VEHICULE } from "../Actions/vehiculeAction";

const etatInitial = {
    vehicules : [],
    erreur : null,
}

const vehiculeReducer = ( state = etatInitial, action) => {
    switch( action.type){
        case ADD_VEHICULE:
            return {
                ...state,
                vehicules: [...state.vehicules, action.payload]
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
                vehicules: state.vehicules.filter((vehicule) => vehicule.id !== action.payload)
            };

        default:
            return state;
    }
}

export default vehiculeReducer;