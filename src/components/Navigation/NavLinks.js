import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = (props) => {
  return (
    <ul className="nav-links">
      <li>All users</li>
      <li>Add users</li>
      <li>Order by dob</li>
    </ul>
  );
};

export default NavLinks;
