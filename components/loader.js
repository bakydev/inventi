import React from 'react';
import {
    Spinner
} from './styled';


/**
 * Renders loader animation.
 * 
 * @return {*}
 */
const Loader = () => {
    return (
        <div>
            <Spinner>
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
            </Spinner>
        </div>
    )
}

export default Loader;
