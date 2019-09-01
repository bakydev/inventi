import styled from 'styled-components';
import {NavLink} from 'react-router-dom';


// Header styles
const StyledHeader = styled.header`
    box-shadow: 1px 1px 0.5px 0.5px rgba(0,0,0,0.1);
    height: 68px;
    display: flex;
    align-items: center;

    nav ul {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
    }

    nav ul li a {
        font-size: 18px;
        text-decoration: none;
        padding: 15px;
        color: #455451;
        transition: color .2s ease-out;

        &:hover {
            color: #00d1b2;
        }
    }
`;

const StyledLink = styled(NavLink)`

    &:hover {
        color: #00d1b2;
    }

    &.active {
        color: #00d1b2;
    }
`;


export {
    StyledHeader,
    StyledLink,
}