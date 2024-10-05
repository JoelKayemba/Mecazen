import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Reducers/authReducer';
import rendezVousReducer from './Reducers/rendezVousReducer';
import vehiculeReducer from './Reducers/vehiculeReducer';
import notificationReducer from './Reducers/notificationReducer';
import paiementReducer from './Reducers/paiementReducer';
import reparationReducer from './Reducers/reparationReducer';



const store= configureStore (
    {
        reducer: {
            auth: authReducer,
            vehicule: vehiculeReducer,
            rendezVous: rendezVousReducer,
            notification: notificationReducer,
            paiement: paiementReducer,
            reparation: reparationReducer
        }
    }
);

export default store;
