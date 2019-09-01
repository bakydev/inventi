import {
    GET_CURRENT_WEATHER,
    GET_DAILY_WEATHER,
    SET_LOADING,
} from './constants';


/**
 * Reducer from React Context API.
 * 
 * @param {object} state
 * @param {object} action
 * @return {object} state
 */
export default (state, action) => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case GET_CURRENT_WEATHER:
            return {
                ...state,
                current: action.payload,
                loading: false
            }
        case GET_DAILY_WEATHER:
            return {
                ...state,
                daily: action.payload,
                loading: false
            }
        default:
            return state;
    }
}