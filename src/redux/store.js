import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Reducers/authReducer';
import rendezVousReducer from '../redux/Reducers/rendezVousReducer';
import vehiculeReducer from './Reducers/vehiculeReducer';
import notificationReducer from './Reducers/notificationReducer';
import paiementReducer from './Reducers/paiementReducer';
import reparationReducer from './Reducers/reparationReducer';
import InscriptionReducer from './Reducers/InscriptionReducer';
import mechanicReducer from './Reducers/mechanicReducer';
import historiqueReducer from './Reducers/historiqueReducer';
import gestionrendezVousReduce from './Reducers/gestionrendezVousReduce';
import factureReducer from './Reducers/factureReducer';


const store= configureStore (
    {
        reducer: {
            auth: authReducer,
            vehicule: vehiculeReducer,
            rendezVous: rendezVousReducer,
            notification: notificationReducer,
            paiement: paiementReducer,
            reparation: reparationReducer,
            inscription: InscriptionReducer,
            mechanic: mechanicReducer,
            historique: historiqueReducer,
            gestionrendezVous: gestionrendezVousReduce,
            facture: factureReducer,
        }
    }
);

export default store;
