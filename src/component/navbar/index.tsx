import { NavbarTop, NavbarLink, NavbarItem } from '../../styles/Navbar';

function Navbar() {
  return (
    <NavbarTop>
      <NavbarItem>
        <NavbarLink to="/">Home</NavbarLink>
        <NavbarLink to="/news">News</NavbarLink>
        <NavbarLink to="/contact">Contact</NavbarLink>
        <NavbarLink to="/about">About</NavbarLink>
      </NavbarItem>
    </NavbarTop>
  );
}
export default Navbar;
