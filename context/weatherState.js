import React, { useReducer } from 'react';
import axios from 'axios';
import WeatherContext from './weatherContext';
import WeatherReducer from './weatherReducer';

import {
    SET_LOADING,
    GET_CURRENT_WEATHER,
    GET_DAILY_WEATHER,
    GET_DAILY_WEATHER_NO_CONTENT,
} from './constants';

// Environment variables
let apiKey;

if (process.env.NODE_ENV !== 'production') {
    apiKey = process.env.REACT_APP_API;
} else {
    apiKey = process.env.APP_API;
}


/**
 * Weather State.
 * 
 * @param {object} props 
 * @return {<Weather.Context.Provider>} Context Provider
 */
const WeatherState = props => {

    const initialState = {
        current: [],
        daily: [],
        loading: false
    }

    // State, dispatch
    const [state, dispatch] = useReducer(WeatherReducer, initialState);

    // Set Loading
    const setLoading = () => dispatch({ type: SET_LOADING });

    // Current Weather
    const getCurrentWeather = async query => {
        setLoading();

        try {
            const res = await axios.get(`https://api.weatherbit.io/v2.0/current?key=${apiKey}&city=${query}`);
            dispatch({
                type: GET_CURRENT_WEATHER,
                payload: res.data
            });
        } catch (error) {
            console.log(error);
        }
    }

    // Dayli Weather
    const getDailyWeather = async query => {
        setLoading();

        const res = await axios.get(`https://api.weatherbit.io/v2.0/forecast/daily?key=${apiKey}&days=7&city=${query}`);

        if (res.status === 204) {
            dispatch({
                type: GET_DAILY_WEATHER_NO_CONTENT,
                payload: true,
            })
        } else {
            dispatch({
                type: GET_DAILY_WEATHER,
                payload: res.data,
            });
        }
    }

    return <WeatherContext.Provider
        value={{
            current: state.current,
            daily: state.daily,
            loading: state.loading,
            error: state.error,
            getCurrentWeather,
            getDailyWeather,
        }}
    >
        {props.children}
    </WeatherContext.Provider>
}

export default WeatherState;
