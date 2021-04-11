import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import SvgLogo from './../icons/Logo';

const AppBarStyles = styled.nav`
    box-shadow: 0 0 3px 1px grey;
    background-color: #fff;
    position: relative;
    z-index: 4;
    ul {
        display: flex;
        align-items: center;
        padding: 1rem;
        height: 64px;
    }
    li {
        margin: 0 1rem;
    }
    a {
        text-decoration: none;
        color: grey;
    }
    svg {
        width: 1.5rem;
    }

`

const AppBar = () => {
    return ( 
        <AppBarStyles>
            <ul>
                <li><SvgLogo/></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/dashboard">DashBoard</Link></li>
            </ul>
        </AppBarStyles>
    );
}
 
export default AppBar;