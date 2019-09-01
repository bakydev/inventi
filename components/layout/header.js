import React from 'react';
import {
    StyledHeader,
    StyledLink,
} from './styled';


/**
 * Renders Header components with navigation links.
 * @return {*}
 */
const Header = () => {
    return (
        <StyledHeader>
            <nav>
                <ul>
                    <li>
                        <StyledLink exact to='/'>Main</StyledLink>
                    </li>
                    <li>
                        <StyledLink exact to='/about' activeClassName="active">About</StyledLink>
                    </li>
                </ul>
            </nav>
        </StyledHeader>
    )
}

export default Header;
