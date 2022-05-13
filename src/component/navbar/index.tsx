import React from 'react';

import { NavbarTop, NavbarLink, NavbarItem } from '../../styles/Navbar';

function Navbar() {
  return (
    <NavbarTop>
      <NavbarItem>
        <NavbarLink to="/">Work</NavbarLink>
        <NavbarLink to="/pricing">Pricing</NavbarLink>
        <NavbarLink to="/business">Business</NavbarLink>
        <NavbarLink to="/contact">Contact</NavbarLink>
        <NavbarLink to="/jobs">Jobs.</NavbarLink>
      </NavbarItem>
    </NavbarTop>
  );
}
export default Navbar;
