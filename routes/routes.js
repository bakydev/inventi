import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Normalize from 'react-normalize';
import { createGlobalStyle } from 'styled-components'
import Header from '../components/layout/header';
import App from '../app.js';
import About from '../components/about';
import NotFound from '../components/notFound';
import WeatherState from '../context/weatherState';

/**
 * Global styles for all components.
 * 
 */
const GlobalStyles = createGlobalStyle`
    * {
        font-family: 'Open Sans', sans-serif;
    }
`;

/**
 * Renders each component without reloading the pages.
 * 
 * @return {*}
 */
const Routes = () => {
    return (
        <WeatherState>
            <Router>
                <Normalize />
                <GlobalStyles />
                <Header />
                <Switch>
                    <Route path="/" exact component={App} />
                    <Route path="/about/" exact component={About} />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        </WeatherState>
    )
}

export default Routes;
