import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = (props) => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          All users
        </NavLink>
      </li>
      <li>
        <NavLink to="/users/add"> Add users</NavLink>
      </li>
      <li>
        <NavLink to="/users/order"> Order by dob </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
