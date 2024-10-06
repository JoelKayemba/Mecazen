import axios from 'axios';
import { connexionURL } from '../../services/dummyJsonApi';

export const loginUser = (userData) => async (dispatch) => {
  try {
    dispatch({ type: 'LOGIN_REQUEST' });

    
    const response = await axios.post(`${connexionURL}`, userData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
    console.log(userData)
    dispatch({
      type: 'LOGIN_SUCCESS',
      payload: response.data, 
    });
  } catch (error) {
    dispatch({
      type: 'LOGIN_FAIL',
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};
