import React from 'react';
import {NavLink} from 'react-router-dom';

const SignedInLinks = () => {
    return (
        <ul className="right">
                <li><NavLink to="/cart">My Cart</NavLink></li>
                <li><NavLink to="/">Sign Out</NavLink></li>
                <li><NavLink to="/" className='btn btn-floating pink lighten-1'>XH</NavLink></li>
        </ul>
    )
}

export default SignedInLinks;