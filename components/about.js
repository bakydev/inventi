import React from 'react';
import {
    PageWrapper,
    Title,
    StyledP,
} from './styled';


/**
 * Renders About page
 * 
 * @return {*}
 */
const About = () => {
    return (
        <PageWrapper direction='column' alignItems='flex-start'>
            <Title>About Simple Weather App</Title>
            <StyledP>App that shows you weather</StyledP>
            <StyledP>Author: Baky Sultanov</StyledP>
            <StyledP>Version: 1.0.0</StyledP>
        </PageWrapper>
    )
}

export default About
