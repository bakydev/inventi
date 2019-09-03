import React, {useContext} from 'react';
import WeatherContext from '../context/weatherContext';
import Loader from './loader';
import {
    LoaderWrapper,
    WeatherWrapper,
    Flex,
    WeatherElement,
    StyledError,
    Related,
    StyledUl,
    StyledLi,
    RelatedIcon,
    RelatedDate,
    RelatedTemp
} from './styled';

/**
 * Renders weather with description.
 * 
 * @return {*}
 */
const Weather = () => {

    // React Context API
    const weatherContext = useContext(WeatherContext);

    // Weather state
    const {loading, daily, error} = weatherContext;
    
    /**
     * Get time.
     * 
     * @param {number} timestamp
     * @return {string} hours:minutes
     */
    const getTime = (timestamp) => {
        const date = timestamp ? new Date(timestamp * 1000) : new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        return `${hours}:${minutes}`;
    }

    /**
     * Generate image src.
     * 
     * @param {string} iconCode
     * @return {string} src
     */
    const generateIcon = (iconCode) => {
        if (!iconCode) return;
        return `https://www.weatherbit.io/static/img/icons/${iconCode}.png`;
    }

    /**
     * Renders current weather.
     * 
     * @param {object} weather
     * @return {*}
     */
    const renderWeather = (weather) => {
        const cityName = weather.city_name;
        const countryCode = weather.country_code;
        const temp = weather.data[0].temp;
        const minTemp = weather.data[0].min_temp;
        const maxTemp = weather.data[0].max_temp;
        const description = weather.data[0].weather.description;
        const visibility = Math.round(weather.data[0].vis);
        const windSpeed = Math.round(weather.data[0].wind_spd);
        const windDirection = weather.data[0].wind_cdir;
        const icon = generateIcon(weather.data[0].weather.icon);
        const sunRise = getTime(weather.data[0].sunrise_ts);
        const sunSet = getTime(weather.data[0].sunset_ts);

        return (
            <WeatherWrapper>
                <Flex
                    flexDirection='column'
                    justifyContent='space-between'
                    alignItems='flex-start'
                >
                    <Flex
                        flexDirection='column'
                    >
                        <WeatherElement margin='0 0 10px 0'>min: {minTemp} &#8451;</WeatherElement>
                        <WeatherElement>max: {maxTemp} &#8451;</WeatherElement>
                    </Flex>
                    <Flex
                        flexDirection='column'
                    >
                        <WeatherElement margin='0 0 10px 0'>Visibility: {visibility} km</WeatherElement>
                        <WeatherElement margin='0 0 10px 0'>Wind speed: {windSpeed} km/h</WeatherElement>
                        <WeatherElement>Wind direction: {windDirection}</WeatherElement>
                    </Flex>
                </Flex>
                <Flex
                    flexDirection='column'
                    justifyContent='center'
                    alignItems='center'
                >
                    <WeatherElement><img src={icon} alt='Weather icon' /></WeatherElement>
                    <WeatherElement fontSize='32px' margin='20px 0'>{temp} &#8451;</WeatherElement>
                    <WeatherElement>{description}</WeatherElement>
                </Flex>
                <Flex
                    flexDirection='column'
                    justifyContent='space-between'
                    alignItems='flex-end'
                >
                    <Flex
                        flexDirection='column'
                        alignItems='flex-end'
                    >
                        <WeatherElement margin='0 0 10px 0'>{cityName}, {countryCode}</WeatherElement>
                        <WeatherElement>{getTime()}</WeatherElement>
                    </Flex>
                    <Flex
                        flexDirection='column'
                    >
                        <WeatherElement margin='0 0 10px 0'>Sunrise: {sunRise}</WeatherElement>
                        <WeatherElement>Sunset: {sunSet}</WeatherElement>
                    </Flex>
                </Flex>
            </WeatherWrapper>
        )
    }

    /**
     * Related weather.
     * @params {object} weather
     * 
     * @param {*} dailyWeather 
     */
    const relatedWeather = (weather) => {
        const dailyWeather = Object.values(weather.data).map((item, index) => (
            <StyledLi key={index}>
                <RelatedDate>{item.datetime}</RelatedDate>
                <RelatedIcon><img src={generateIcon(item.weather.icon)} alt='Weather icon' /></RelatedIcon>
                <RelatedTemp>{item.temp}</RelatedTemp>
            </StyledLi>
        ));

        return (
            <Related>
                <StyledUl>
                    {dailyWeather}    
                </StyledUl>
            </Related>
        );
    }

    if (error) {
        return (
            <StyledError padding='0 60px'>City does not exist</StyledError>
        );
    }
    
    return (
        <div>
            {loading ? (
                <LoaderWrapper>
                    <Loader />
                </LoaderWrapper>
                ) : (<>
                        {daily && daily.data && renderWeather(daily)}
                        {daily && daily.data && relatedWeather(daily)}
                    </>
                )
            }
        </div>
    )
}

export default Weather;
