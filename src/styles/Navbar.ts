import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Menu } from '@styled-icons/entypo';
import { device } from '../constant/devices';
import NavbarBgr from '../assets/imgs/png/banner.png';
import LogoImg from '../assets/imgs/png/Union.png';

export const NavbarContainer = styled.nav`
  background: url(${NavbarBgr}) top center / cover no-repeat;
  width: 100%;
  height: 778px;
  position: relative;
`;
export const NavbarTop = styled.div`
  font-family: 'Poppins', sans-serif;
  overflow: hidden;
  display: inline-block;
`;

export const Logo = styled.div`
  background: url(${LogoImg}) top center / cover no-repeat;
  width: 108px;
  top: 50px;
  left: 146px;
  height: 24px;
  position: absolute;
`;

export const NavbarItem = styled.div`
  top: 52px;
  left: 844px;
  text-decoration: none;
  font-size: 17px;
  position: absolute;

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
  font-size: 14px;
  text-decoration: none;
  margin-left: 49px;
  color: #000000;
  &:hover {
    background-color: #ddd;
    color: black;
  }
  &:active {
    background-color: #04aa6d;
    color: white;
  }
`;
