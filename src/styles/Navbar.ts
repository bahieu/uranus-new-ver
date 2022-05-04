import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Menu } from '@styled-icons/entypo';
import { device } from '../constant/devices';

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

  @media ${device.mobile} {
    display: none;
  }
  @media ${device.tablet} {
    display: none;
  }
  @media ${device.pc} {
    display: block;
  }
`;

export const MenuIcon = styled(Menu)`
  display: none;

  @media ${device.mobile} {
    display: flex;
    margin-left: 0;
    width: 30px;
    height: 30px;
  }
  @media ${device.tablet} {
    display: flex;
    margin-right: 0;
    width: 50px;
    height: 50px;
  }
  @media ${device.pc} {
    display: none;
  }
`;

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
