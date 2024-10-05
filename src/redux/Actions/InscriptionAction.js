import axios from 'axios';
import { inscriptionURL } from '../../services/dummyJsonApi';

export const inscriptionUser = ( userData ) => async (dispatch) => {
    try{
        dispatch ({ type: 'REGISTER_REQUEST'});

        const response = await axios.post(`${inscriptionURL}` , userData);
        console.log(response.data)

        dispatch({
            type: 'REGISTER_SUCCESS',
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: 'REGISTER_FAIL',
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        });
    }

}