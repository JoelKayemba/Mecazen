

const initialState = {
  loading: false,
  user: null,
  error: null,
  isAuth: false,
  isMechanic: false,
};



const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return { ...state, loading: true, error: null };
    case 'LOGIN_SUCCESS':
      return { ...state, loading: false, user: action.payload, isAuth: true, isMechanic: action.payload.isMechanic };
    case 'LOGIN_FAIL':
      return { ...state, loading: false, error: action.payload, isAuth: false };
    case 'LOGOUT_USER':
      return { ...initialState }; // Réinitialise l’état à l’état initial
    default:
      return state;
  }
};

export default authReducer;
