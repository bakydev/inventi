import React from 'react';
import {Link} from 'react-router-dom';
import {NotFoundWrapper} from './styled';


/**
 * Renders Not Found page.
 * 
 * @return {*} 
 */
const NotFound = () => {
    return (
        <div>
            <NotFoundWrapper>
                <h1>Not Found</h1>
                <p>The page you are looking for does not exist...</p>
                <Link to='/'>Go back to main page</Link>
            </NotFoundWrapper>
        </div>
    )
}

export default NotFound;