import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <p className="active-nav">Meta Master</p>
        <NavLink to="/" activeClassName="active-nav" exact={true}>Dashboard</NavLink>
    </header>
);

export default Header;
