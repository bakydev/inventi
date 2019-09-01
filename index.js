import React from 'react';
import {render} from 'react-dom';
import Routes from './routes/routes';

/**
 * Renders React Application.
 * 
 * @inheritDoc
 */
render(
    <Routes />,
    document.getElementById('root')
);