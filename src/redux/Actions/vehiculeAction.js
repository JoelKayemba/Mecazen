export const ADD_VEHICULE = 'ADD_VEHICULE';
export const EDIT_VEHICULE = 'EDIT_VEHICULE';
export const DELETE_VEHICULE = 'DELETE_VEHICULE';

export const addVehicule = (vehicule) => {
    return {
        type: ADD_VEHICULE,
        payload: vehicule,
    };
};

export const editVehicule = ( id , vehicule ) => {
    return {
        type: EDIT_VEHICULE,
        payload: {id, ...vehicule},
        
        
    };

   
};


export const deleteVehicule = (id) =>{
    return{
        type: DELETE_VEHICULE,
        payload: id,
    };
       
};