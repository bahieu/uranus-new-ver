import React from 'react';

import {
  NavbarContainer,
  NavbarTop,
  NavbarLink,
  NavbarItem,
  Logo,
} from '../../styles/Navbar';

function Navbar() {
  return (
    <NavbarContainer>
      <NavbarTop>
        <Logo />
        <NavbarItem>
          <NavbarLink to="/">Work</NavbarLink>
          <NavbarLink to="/pricing">Pricing</NavbarLink>
          <NavbarLink to="/business">Business</NavbarLink>
          <NavbarLink to="/contact">Contact</NavbarLink>
          <NavbarLink to="/jobs">Jobs.</NavbarLink>
        </NavbarItem>
      </NavbarTop>
    </NavbarContainer>
  );
}
export default Navbar;
