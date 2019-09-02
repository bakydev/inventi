import React from 'react';
import CityForm from './components/form';
import Weather from './components/weather';
import {
    PageWrapper,
    Title,
} from './components/styled';


/**
 * Renders Main App page
 * 
 * @return {*}
 */
const App = () => {
    return (
        <PageWrapper
            direction='column'
            alignItems='center'
            margin='60px 15px'
        >
            <Title>Weather Forecast</Title>
            <CityForm />
            <Weather />
        </PageWrapper>
    )
}

export default App;
