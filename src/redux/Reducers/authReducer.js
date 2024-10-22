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
        return { ...state, loading: false, user: action.payload , isAuth:true, isMechanic:action.payload.isMechanic};
      case 'LOGIN_FAIL':
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default authReducer;
  