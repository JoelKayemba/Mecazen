// rendezVousReducer.js
import { ADD_TO_RENDEZ_VOUS, UPDATE_RENDEZ_VOUS, MODIFY_RENDEZ_VOUS, VALIDATE_MODIFICATION , ANNULER_RENDEZ_VOUS} from '../Actions/rendezVousAction';

const etatInitial = {
  rendezVous: [],
  erreur: null,
};

const rendezVousReducer = (state = etatInitial, action) => {
  switch (action.type) {
    case ADD_TO_RENDEZ_VOUS:
      // Ajout du rendez-vous à la liste
      return {
        ...state,
        rendezVous: [...state.rendezVous, action.payload],
      };

    case UPDATE_RENDEZ_VOUS:
      return {
        ...state,
        rendezVous: state.rendezVous.map((rdv) =>
          rdv.id === action.payload.id
            ? {
                ...rdv,
                status: action.payload.status, // Mise à jour de l'état
                reason: action.payload.reason || '', // Ajout du commentaire si refusé
                price: action.payload.price,
                duration: action.payload.duration
              }
            : rdv
        ),
      };

      case MODIFY_RENDEZ_VOUS:
        return {
          ...state,
          rendezVous: state.rendezVous.map((rdv) =>
            rdv.id === action.payload.id
              ? { ...rdv, ...action.payload }
              : rdv
          ),
        };
  
        case VALIDATE_MODIFICATION:
            return {
                ...state,
                rendezVous: state.rendezVous.map((rdv) =>
                    rdv.id === action.payload.id
                        ? {
                              ...rdv,
                              modificationStatus: action.payload.modificationStatus,
                              reason: action.payload.reason,
                          }
                        : rdv
                ),
            };

            case ANNULER_RENDEZ_VOUS:
                return {
                    ...state,
                    rendezVous: state.rendezVous.filter((rdv) => rdv.id !== action.payload.id),
                };
  

    default:
      return state;
  }
};

export default rendezVousReducer;
