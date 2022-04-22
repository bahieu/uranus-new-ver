import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarTop = styled.nav`
  background-color: #333;
  overflow: hidden;
`;

export const NavbarItem = styled.div`
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const MenuIcon = styled.div``;

export const NavbarLink = styled(Link)`
  color: white;
  font-size: x-large;
  font-family: Helvetica;
  text-decoration: none;
  margin: 10px;
  &:hover {
    background-color: #ddd;
    color: black;
  }
  &:active {
    background-color: #04aa6d;
    color: white;
  }
`;
