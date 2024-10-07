const etatInitial = {
    user: null,
    loading: false,
    erreur: null,
    isUser: false
};

const InscriptionReducer = ( state = etatInitial, action) => {
    switch( action.type ){
        case 'REGISTER_REQUEST':
            return { ...state, loading: true, error:null};
        case 'REGISTER_SUCCESS':
            return { ...state, loading:false, user: action.payload, isUser:true};
        case 'REGISTER_FAIL' :
            return { ...state, loading:false, error: action.payload};
        default:
            return state;
    }
}

export default InscriptionReducer;