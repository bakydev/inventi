import {
    GET_CURRENT_WEATHER,
    GET_DAILY_WEATHER,
    SET_LOADING,
    GET_DAILY_WEATHER_NO_CONTENT,
} from './constants';


/**
 * Reducer for React Context API.
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
                error: false,
                loading: false
            }
        case GET_DAILY_WEATHER_NO_CONTENT:
            return {
                ...state,
                error: action.payload,
                loading: false,
            }
        default:
            return state;
    }
}